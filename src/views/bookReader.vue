<template>
    <div class="book-reader" :style="{color:currentTheme.color,backgroundColor:currentTheme.bg}">
        <div class="rendition">
            <div class="title" :style="{color:currentTheme.color}">{{chapterInfo.title}}</div>
            <div class="content-wrap">
                <scroll :scrollDirection="1">
                    <div class="content" :style="{fontSize:font + 'px',lineHeight:font*1.5+'px'}">
                        <div class="head" :style="{fontSize:font + 4 + 'px',lineHeight:(font+4)*1.5+'px'}">{{chapterInfo.title}}</div>
                        <p v-html="bookResolve(chapterInfo.cpContent)"></p>
                    </div>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
import scroll from '../components/scroll'
import {bookReaderMixin} from '../utils/mixin'
import {getChapterLink} from '../utils/localStorage'
export default {
    mixins:[bookReaderMixin],
    data() {
        return {
            font:16,
            currentTheme:{
                color:'rgb(51, 51, 51)',
                bg:'rgb(244, 244, 244)'
            },
            chapterInfo:'',
            themeStyle:[
                {   
                    name:'yellow',
                    bg:'rgb(245, 230, 206)',
                    color:'rgb(80, 66, 44)'
                },
                {
                    name:'green',
                    bg:'rgb(213, 239, 210)',
                    color:'rgb(30, 76, 43)'
                },
                {
                    name:'white',
                    bg:'rgb(244, 244, 244)',
                    color:'rgb(51, 51, 51)'
                },
                {
                    name:'blue',
                    bg:'rgb(205, 228, 253)',
                    color:'rgb(83, 103, 146)'
                },
                {
                    name:'black',
                    bg:'rgb(10, 10, 10)',
                    color:'rgb(73, 73, 73)'
                }
            ]
        }
    },
    methods:{
        async getChapterContent() {
            let link = getChapterLink()[this.$route.params.bookId]
            const res = await this.$http.get('/chapter/chapter/' + this.urlEncode(link))
            if (res.status === 200) {
                this.chapterInfo = res.data.chapter
            }
            console.log(res)
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
    mounted(){
        this.getChapterContent()
    },
    components:{
        scroll
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