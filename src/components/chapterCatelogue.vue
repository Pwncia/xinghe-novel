<template>
    <transition name="fade">
        <div class="chapter-catelogue" @click.stop="handleClick" v-show="isChapterCatelogueShow">
            <transition name="slide-right">
                <div class="catelogue-wrap" :style="theme" ref="catelogue" v-show="isChapterCatelogueShow">
                    <div class="title">目录</div>
                        <div class="content">
                            <div class="load-animate-wrap" v-show="!isLoaded">
                                <load-animate></load-animate>
                            </div>
                            <scroll>
                                <div class="chapter-item" @click.stop="goBookReader(item.link)" :class="{current:item.link === chapterLink}" v-for="(item, index) in chapterArr" :key="index">{{item.title}}</div>
                            </scroll>
                        </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import loadAnimate from './loadAnimate'
import scroll from './scroll'
import {bookReaderMixin} from '../utils/mixin'
export default {
    props:['chapterLink', 'theme'],
    mixins:[bookReaderMixin],
    data(){
        return {
            isLoaded:false,
            chapterArr:[]
        }
    },
    methods:{
        goBookReader(link) {
            this.hideChapterCatelogue()
            this.$emit('go-bookreader', link)
        },
        hideChapterCatelogue(){
                this.setIsChapterCatelogueShow(false)
        },
        handleClick(e){
            if (e.clientX >= this.$refs.catelogue.offsetLeft + this.$refs.catelogue.offsetWidth) {
                this.hideChapterCatelogue()
            }
            return false
        },
        async getChapterCatelogue(){
            const res = await this.$http.get('/api/atoc', {
                params:{
                    view:'summary',
                    book:this.$route.params.bookId
                }
            })
            let chapterRes
            if (res.status === 200) {
                this.isLoaded = true
                chapterRes = await this.$http.get('/api/atoc/' + res.data[0]._id, {
                    params:{
                        view:'chapters'
                    }
                })
                if (chapterRes.status === 200){
                    this.isLoaded = true
                    this.chapterArr = chapterRes.data.chapters ? chapterRes.data.chapters : ''
                }
            }
            console.log(chapterRes)
        }
    },
    components:{
        loadAnimate,
        scroll
    },
    created() {
        this.getChapterCatelogue()
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.chapter-catelogue {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:106;
    background-color: rgba(0,0,0,.6);
    padding:px2rem(10) 0 px2rem(10) px2rem(10);
    box-sizing:border-box;
    .catelogue-wrap {
        display: flex;
        flex-direction: column;
        width:90%;
        height:100%;
        background-color: #fff;
        border-radius: px2rem(20);
        color:rgb(114, 110, 116);
        font-size:px2rem(14);
        box-sizing:border-box;
        .title {
            height:px2rem(52);
            line-height:px2rem(52);
            padding:0 px2rem(20) 0 px2rem(30);
            border-bottom:px2rem(0.5) solid #eee;
            font-size:px2rem(18);
            font-weight:700;
        }
        .content {
            position: relative;
            width:100%;
            height: 100%;
            padding:0 px2rem(20) 0 px2rem(30);
            box-sizing:border-box;
            overflow: hidden;
            .load-animate-wrap {
                position: absolute;
                top:30%;
                left:0;
                width:100%;
                height: 100%;
            }
            .chapter-item {
                width:100%;
                height:px2rem(40);
                border-bottom: px2rem(0.5) solid #eee;
                line-height:px2rem(40);
                &.current {
                    color:#ff9900;
                }
            }
        }
    }
}
</style>