<template>
    <div class="cate-booklist">
        <div class="top">
            <span class="icon-back icon" @click="back"></span>
            <div class="title">{{queryInfo.major}}</div>
        </div>
        <div class="content">
            <div class="option-bar">
                <div class="bookCount">共 {{bookData.total}} 本</div>
                <div class="select-bar" @click="showBookScreen">
                    <span>{{type}} · {{minor}}</span>
                    <span class="icon-down2"></span>
                </div>
           
            </div>
            <div class="bookList-content">
              <scroll @onScroll="handleScroll" ref="bookListScroll">
                  <div class="book-list-wrap">
                    <div class="book-item"
                    v-for="(item, index) in bookData.books"
                    :key="index">
                        <div class="cover">
                            <img :src="getCoverPath(item.cover)" alt="">
                        </div>
                        <div class="book-info">
                            <div class="tittle">{{item.title}}</div>
                            <div class="intro">{{item.shortIntro}}</div>
                            <div class="author-tag">
                                <div class="author">
                                    <span class="icon-author"></span>
                                    <span>{{item.author}}</span>
                                </div>
                                <div class="tag">
                                    <span v-if="item.minorCate">{{item.minorCate}}</span>
                                    <span>{{mathToThenth(item.latelyFollower)}}万人气</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </scroll>
            </div>
            <transition name="slide-down">
                <book-screen 
                v-show="isBookScreenShow" 
                @bookScreenhide="hideBookScreen"
                :type="type"
                :minor="minor"
                :minorCateList="minorCate[queryInfo.gender]"
                :major="queryInfo.major"
                @query-booklist="queryBookList"
                ref="bookScreen"
                >
                </book-screen>
            </transition>
        </div>
    </div>
</template>

<script>
import bookScreen from './bookScreen'
import {bookStoreMixin} from '@/utils/mixin.js'
import scroll from '../scroll'
export default {
    mixins:[bookStoreMixin],
    props:['bookData', 'queryInfo'],
    data() {
        return {
            isBookScreenShow:false,
            total:0,
            type:'热门',
            minor:'全部',
            timeFlag:true
        }
    },
    methods:{
        handleScroll(e) {
            if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && this.timeFlag === true) {
                this.timeFlag = false
                this.$emit('up-pull')
                setTimeout(() => {
                    this.timeFlag = true
                }, 1000)
            }
        },
        back() {
            this.$emit('hideBookListCate')
            this.hideBookScreen()
            this.$refs.bookScreen.refresh()
            this.$refs.bookListScroll.scrollTo(0, 0)
            this.type = '热门'
            this.minor = '全部'
        },
        showBookScreen() {
            this.isBookScreenShow = true
        },
        hideBookScreen() {
            this.isBookScreenShow = false
        },
        //获取封面路径
        getCoverPath(str){
            return this.urlDecode(str.substr(7))
        },
        //将人气单位改为万
        mathToThenth(val) {
            val /= 10000
            return val.toFixed(1)
        },
        //根据参数请求书本列表
        queryBookList(mins, type, title){
            this.pullFlag = false
            this.$emit('query-booklist', mins, type)
            this.minor = mins || '全部'
            this.type = title || this.type
            this.$refs.bookListScroll.scrollTo(0, 0)
        }

    },
    components:{
        bookScreen,
        scroll
    },
    mounted() {
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
            // flex:0 0 px2rem(40);
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
                box-sizing: content-box;
            }
        }
        .content {
            position: relative;
            .option-bar {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:0 px2rem(10);
                // flex:0 0 px2rem(40);
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
            .bookList-content {
                padding:0 px2rem(10);
                $height:px2rem(80.5);
                height:calc(100vh - #{$height});
                // background-color: pink;
                .book-list-wrap {
                    .book-item {
                        display: flex;
                        height: px2rem(120);
                        .cover {
                            flex:0 0 px2rem(80);
                            img {
                            width:100%;
                            }
                        }
                        .book-info {
                            display: flex;
                            flex-direction:column;
                            justify-content:space-evenly;
                            margin-left: px2rem(15);
                            font-size:px2rem(14);
                            color:#333;
                            .title {
                                font-weight: 700;
                            }
                            .intro {
                                font-size:px2rem(12);
                                line-height: px2rem(14);
                                color:#999;
                                @include ellipsis;
                            }
                            .author-tag {
                                display:flex;
                                justify-content:space-between;
                                .author {
                                    color:#aaa;
                                    font-size:px2rem(9);
                                    span:last-child{
                                        font-size:px2rem(10);
                                        margin-left:px2rem(3);
                                    }
                                }
                                .tag {
                                    display: flex;
                                    font-size:px2rem(8);
                                    span:first-child {
                                        font-size:px2rem(8);
                                        padding:px2rem(5);
                                        margin-right: px2rem(10);
                                         color:#666;
                                        background-color: #eee;
                                        border-radius:px2rem(11);
                                    }
                                    span:last-child {
                                        padding:px2rem(5);
                                        color:#ff9900;
                                        background-color: #fde0bf;
                                        border-radius:px2rem(11);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>