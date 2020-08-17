<template>
    <div class="book-reader" :style="styleObj" @click="tapScreen">
        <div class="rendition">
            <div class="title" :style="{color:currentTheme.color}">{{chapterInfo.title}}</div>
            <div class="content-wrap">
                <scroll :scrollDirection="1">
                    <div class="content" :style="{fontSize:font + 'px',lineHeight:font*space+'px'}">
                        <div class="head" :style="{fontSize:font + 4 + 'px',lineHeight:(font+4)*space+'px'}">{{chapterInfo.title}}</div>
                        <p v-html="bookResolve(chapterInfo.isVip ? '付费章节，请下载APP登录阅读' : chapterInfo.cpContent)"></p>
                    </div>
                </scroll>
            </div>
        </div>
        <chapter-catelogue 
            :chapterLink="chapterLink" 
            v-show="isChapterCatelogueShow"
            @go-bookreader="changeChapter"
            :theme="styleObj"
        >
        </chapter-catelogue>
        <transition name="slide-down1">
            <title-bar :style="styleObj" v-show="isTitleAndMenuShow"></title-bar>
        </transition>
        <transition name="slide-up">
            <menu-bar @tap-menubar="handTapMenu" :style="styleObj" v-show="isTitleAndMenuShow" :options="{isNight}"></menu-bar>
        </transition>
        <transition name="slide-up">
            <set-bar 
             v-show="isSetBarShow" 
             :options="{space,font,currentTheme}"
             @set-fontspace="changeFontSpace"
             @set-theme="changeTheme"
             @fontsize-delarge="decreaseFontsize"
             @fontsize-enlarge="increaseFontsize"
            >
            </set-bar>
        </transition>
    </div>
</template>

<script>
import scroll from '../components/scroll'
import {bookReaderMixin} from '../utils/mixin'
import {getChapterLink, setChapterLink, getReaderSetting, saveReaderSetting} from '../utils/localStorage'
import chapterCatelogue from '../components/chapterCatelogue'
import titleBar from '../components/bookreader/titleBar'
import menuBar from '../components/bookreader/menuBar'
import setBar from '../components/bookreader/setBar'
export default {
    mixins:[bookReaderMixin],
    data() {
        return {
            //默认设置
            font:16,
            space:1.5,
            currentTheme:{
                name:'white',
                color:'rgb(51, 51, 51)',
                bg:'rgb(244, 244, 244)'
            },
            isNight:false,
            chapterInfo:'',
            nightMode: {
                name:'black',
                bg:'rgb(10, 10, 10)',
                color:'rgb(73, 73, 73)'
            },
            isTitleAndMenuShow:false,
            isSetBarShow:false,
            chapterLink:''
        }
    },
    methods:{
        increaseFontsize(val) {
            if (this.font >= 24) {
                console.log('最大字号')
                return false
            }
            let fontsize = this.font + val
            saveReaderSetting('font', fontsize)
            let setting = getReaderSetting()
            if (setting.font) {
                this.font = setting.font
            }
        },
        decreaseFontsize(val){
            if (this.font <= 14) {
                console.log('最小字号')
                return false
            }
            let fontsize = this.font - val
            saveReaderSetting('font', fontsize)
            let setting = getReaderSetting()
            if (setting.font) {
                this.font = setting.font
            }
        },
        changeTheme(obj){
            saveReaderSetting('theme', obj)
            let themeObj = getReaderSetting().theme
            if (themeObj != undefined && themeObj !== {}) {
                this.currentTheme = themeObj
            }
        },
        changeFontSpace(val) {
            //将间距设置保存到本地
            saveReaderSetting('space', val)
            //读取设置
            let fontSpace = getReaderSetting().space
            if (fontSpace) {
                this.space = fontSpace
            }
        },
        changeChapter(link){
            //点击要去的章节，将章节链接保存为当前链接
            setChapterLink(this.$route.params.bookId, link)
            // //请求章节内容
            this.getChapterContent()
        },
        setMode() {
            this.isNight = !this.isNight
            saveReaderSetting('mode', this.isNight)
            this.bookReaderInit()
        },
        handTapMenu(id){
            if (id !== 3) {
                this.isTitleAndMenuShow = false
            }
            switch (id){
                case 0:this.setIsChapterCatelogueShow(true)
                        break
                case 2:this.isSetBarShow = true
                break
                case 3:this.setMode()
                break
            }
        },
        tapScreen(e) {
            let width = window.innerWidth
            if (this.isTitleAndMenuShow || this.isSetBarShow) {
                this.isTitleAndMenuShow = false
                this.isSetBarShow = false
                return false
            }
            e.clientX < width * 0.15 ? this.prePage() : (e.clientX > width * 0.85 ? this.nextPage() : this.isTitleAndMenuShow = true)
        },
        prePage() {
            console.log('pre')
        },
        nextPage() {
            console.log('next')
        },
        async getChapterContent() {
            //获取当前章节链接
            this.chapterLink = getChapterLink()[this.$route.params.bookId]
            //根据链接获取内容
            const res = await this.$http.get('/chapter/chapter/' + this.urlEncode(this.chapterLink))
            if (res.status === 200) {
                this.chapterInfo = res.data.chapter
            }
            console.log(res)
        },
        bookReaderInit(){
            //获取本地阅读器设置
            let setting = getReaderSetting()
            //将默认设置改为本地设置
            if (setting) {
                this.currentTheme = setting.mode ? this.nightMode : (setting.theme ? setting.theme : this.currentTheme)
                this.font = setting.font ? setting.font : this.font
                this.space = setting.space ? setting.space : this.space
            }
            else { //将默认设置保存为本地设置
                saveReaderSetting('space', this.space)
                saveReaderSetting('theme', this.currentTheme)
                saveReaderSetting('font', this.font)
                saveReaderSetting('mode', this.isNight)
            }
        },
        bookResolve(content){
            if (!content) {
                return ''
            }
            let _book = JSON.stringify(content).replace(/^"|"$/g, '');
            _book = '<p>' + _book.replace(/\s*/g, '').replace(/\\r|\\n|\\r\\n\\n|\\r\\n/g, '</p><p>') + '</p>';
            return _book
        }
    },
    computed: {
        styleObj(){
            return {
                color:this.currentTheme.color,
                backgroundColor:this.currentTheme.bg
            }
        }
    },
    mounted(){
        this.bookReaderInit()
        this.getChapterContent()
    },
    components:{
        scroll,
        chapterCatelogue,
        titleBar,
        menuBar,
        setBar
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
.book-reader {
    width:100vw;
    height:100vh;
    padding:0 px2rem(15);
    background-color: pink;
    box-sizing:border-box;
    .rendition {
        position: relative;
        width:100%;
        height: 100%;
        .title {
            position: absolute;
            bottom:0;
            left: 0;
            // height: px2rem(28);
            font-size:px2rem(14);
            line-height: px2rem(28);
        }
        .content-wrap {
            width:100%;
            height: calc(100vh - #{px2rem(28)});
            .head {
                margin:px2rem(20) 0;
            }
            p {
                text-indent: 2em;
                margin:px2rem(14) 0;
            }
        }
    }
}
</style>