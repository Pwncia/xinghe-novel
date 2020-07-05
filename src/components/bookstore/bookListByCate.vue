<template>
    <div class="cate-booklist">
        <div class="top">
            <span class="icon-back icon" @click="back"></span>
            <div class="title">玄幻</div>
        </div>
        <div class="option-bar">
            <div class="bookCount">共100本</div>
           <div class="select-bar" @click="showBookScreen">
               <span>热门·全部</span>
               <span class="icon-down2"></span>
           </div>
           <transition name="slide-down">
                <book-screen v-show="isBookScreenShow" @bookScreenhide="hideBookScreen"></book-screen>
           </transition>
        </div>
    </div>
</template>

<script>
import bookScreen from './bookScreen'
export default {
    data() {
        return {
            isBookScreenShow:false
        }
    },
    methods:{
        back() {
            this.$emit('hideBookListCate')
        },
        showBookScreen() {
            this.isBookScreenShow = true
        },
        hideBookScreen() {
            this.isBookScreenShow = false
        }
    },
    components:{
        bookScreen
    }
}
</script>

<style lang='scss' scoped>
    @import '../../assets/styles/global.scss';
    .cate-booklist {
        position:absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        z-index: 100;
        background-color: #fff;
        .top {
            display: flex;
            align-items:center;
            height: px2rem(40);
            font-size:px2rem(24);
            border-bottom: px2rem(0.5) solid #ccc;
            .icon {
                 padding:0 5px;
            }
            .title {
                flex:1;
                text-align: center;
                font-size: px2rem(18);
                font-weight: 700;
                padding-right: px2rem(34);
            }
        }
        .option-bar {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:0 px2rem(10);
            height:px2rem(40);
            font-size:px2rem(8);
            color:#aaa;
            .select-bar {
                border: px2rem(0.5) solid #aaa;
                padding:px2rem(5) px2rem(10);
                border-radius: px2rem(24);
                span:first-child {
                    margin-right:px2rem(5)
                }
            }
        }
    }
</style>