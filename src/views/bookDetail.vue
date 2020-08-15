<template>
    <div class="book-detail">
        <div class="content">
            <scroll @onScroll="onScroll">
                <div class="content-wrap">
                    <div class="bg-img">
                        <img :src="coverPath" alt="">
                    </div>
                    <div class="book-detail-wrap">
                        <div class="book-info">
                            <div class="left">
                                <img :src="coverPath" alt="">
                            </div>
                            <div class="right">
                            <div class="title">{{bookInfo.title}}</div>
                            <div class="author">
                                {{bookInfo.author}} | {{bookInfo.cat}}
                            </div>
                            <div class="words-count">{{bookInfo.wordCount | unitToWan}}万字</div>
                            </div>
                        </div>
                        <div class="score-wrap">
                            <div class="star-wrap item">
                            <div class="top">
                                <span class="bold">{{score | format1}}</span>
                                <span>分</span>
                            </div>
                            <div class="bottom">
                                <span v-for="(item,index) in starObjArr" :key="index" :style="item.style">
                                    
                                </span>
                            </div>
                            </div>
                            <div class="lately-follower item">
                            <div class="top">
                                <span class="bold">{{bookInfo.latelyFollower | unitToWan}}</span>
                                <span>万</span>
                            </div>
                            <div class="bottom">7日人气</div>
                            </div>
                            <div class="total-follower item">
                            <div class="top">
                                <span class="bold">{{bookInfo.totalFollower | unitToWan}}</span>
                                <span>万</span>
                            </div>
                            <div class="bottom">累计人气</div>
                            </div>
                        </div>
                        <div class="book-intro">
                            <div class="intro-wrap" :class="{fold:isFold}">
                            <div class="text">{{bookInfo.longIntro}}</div>
                            <div class="fold-text" v-if="isFold" @click="isFold = false">展开</div>
                            </div>
                            <div class="last-chapter">
                            <div class="left">目录</div>
                            <div class="right" @click=showChapterCategory>
                                <div class="update">{{updated}}</div>
                                <div class="chapter">{{bookInfo.lastChapter}}</div>
                                <span class="icon-forward"></span>
                            </div>
                            </div>
                        </div>
                        <div class="short-review">
                            <short-review :reviewsObj="reviewsObj" @show-all-reviews="allReviewsShow"></short-review>
                        </div>
                        <div class="copyright">
                            <div class="title">图书信息</div>
                            <div class="content">{{bookInfo.copyrightInfo}}</div>
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
        <div class="title-bar" :class="{'bg-transparent':isTransparent}">
            <div class="left">
                <span class="icon-back"  @click="back"></span>
                <span class="book-title" v-show="!isTransparent">{{bookInfo.title}}</span>
            </div>
            <div class="right">
                <div class="heart-wrap" @click="toggleHeart">
                    <span class="icon-heart-full" v-if="isHeartFull"></span>
                    <span class="icon-heart" v-else></span>
                </div>
                <span class="icon-community"></span>
                <span class="icon-more"></span>
            </div>
        </div>
        <div class="loading-wrap"  v-show="!isLoaded">
            <div class="loading">
                <load-animate></load-animate>
            </div>
            <div class="text">加载中...</div>
        </div>
        <div class="footer">
            <div class="add">
                <div class="icon-wrap">
                    <span class="icon-add"></span>
                </div>
                <span>加入书架</span>
            </div>
            <div class="read">
                <span class="icon-book"></span>
                <span>免费阅读</span>
            </div>
            <div class="download">
                <span class="icon-download"></span>
                <span>下载</span>
            </div>
        </div>
        <message-box ref="messageBox" :msg="msg"></message-box>
        <transition name="slide-left">
            <all-reviews :reviewsObj="reviewsObj" v-show="isAllReviewsShow" @all-reviews-hide="hideAllReviews"></all-reviews>
        </transition>
        <chapter-category @go-bookreader="goBookReader"></chapter-category>
    </div>
</template>

<script>
import loadAnimate from '../components/loadAnimate'
import scroll from '../components/scroll'
import shortReview from '../components/bookdetail/shortReview'
import {updatedTime} from '../utils/utils'
import messageBox from '../components/messageBox'
import allReviews from '../components/bookdetail/allReview'
import chapterCategory from '../components/chapterCategory'
import {setWantReadList, getWantReadList, deleteWantRead, setChapterLink} from '../utils/localStorage'
import {bookReaderMixin} from '../utils/mixin'

export default {
    mixins:[bookReaderMixin],
    data() {
        return {
            isLoaded:false,
            isTransparent:false,
            score:'',
            bookInfo:'',
            coverPath:'',
            starObjArr:[],
            isFold:true,
            updated:'',
            reviewsObj:'',
            isHeartFull:'',
            msg:'',
            isAllReviewsShow:false
        }
    },
    methods:{
        goBookReader(link) {
            setChapterLink(this.$route.params.bookId, link)
            this.$router.push('/bookreader/' + this.$route.params.bookId)
        },
        showChapterCategory() {
            this.setIsChapterCategoryShow(true)
        },
        allReviewsShow(){
            this.isAllReviewsShow = true
        },
        hideAllReviews(){
            this.isAllReviewsShow = false
        },
        toggleHeart(){
            this.$refs.messageBox.hidden()
            if (this.isHeartFull) {
                this.msg = '已从想读清单中移除'
                this.$refs.messageBox.show()
                deleteWantRead(this.$route.params.bookId)
            }
            else {
                this.msg = '已标记为想读'
                this.$refs.messageBox.show()
                setWantReadList(this.$route.params.bookId)
            }
            this.isHeartFull = !this.isHeartFull
        },
        onScroll(e) {
            if (e.target.scrollTop > 0) {
                this.isTransparent = false
            }
            else {
                this.isTransparent = true
            }
        },
        back() {
            if (window.history.length <= 1) {
                this.$router.push('/bookstore')
            }
            else {
                this.$router.go(-1)
            }
        },
        getBookDetail() {
            return new Promise((resolve, reject) => {
                this.$http.get('/api/book/' + this.$route.params.bookId).then(res => {
                    if (res.status === 200) {
                        resolve(res.data)
                    }
                })
            })
        },
        getShortReview() {
            return new Promise(resolve => {
                this.$http.get('/api/post/review/by-book', {
                    params:{
                        book:this.$route.params.bookId,
                        sort:'comment-count',
                        start:0
                    }
                }).then(res => {
                    if (res.status === 200) {
                        resolve(res.data)
                    }
                })
            })
        },
        getBookDetailInit(){
            this.getBookDetail().then(res => {
                console.log(res)
                this.isLoaded = true
                this.isTransparent = true
                this.bookInfo = res
                this.coverPath = this.urlDecode(res.cover.substr(7))
                this.score = res.rating.score
                this.setStarObj()
                this.updated = updatedTime(this.bookInfo.updated)
            })
            this.getShortReview().then(res => {
                this.reviewsObj = res
                console.log(res)
            })
            let readList = getWantReadList()
            if (readList) {
                this.isHeartFull = readList.some(item => item === this.$route.params.bookId)
            }
        },
        setStarObj(){
            let full = Math.floor(this.bookInfo.rating.score / 2)
            let half = this.bookInfo.rating.score % 2 > 0.5 ? 1 : 0
            let empty = 5 - full - half
            for (let i = 0; i < full; i++) {
                this.starObjArr.push({
                    style:{
                        'background-image':'url(' + require('../assets/images/star-full.jpg') + ')'
                    }
                })
            }
            if (half !== 0) {
                this.starObjArr.push({
                    style:{
                        backgroundImage:'url(' + require('../assets/images/star-half.jpg') + ')'
                    }
                })
            }
            if (empty !== 0) {
                this.starObjArr.push({
                    style:{
                         'background-image':'url(' + require('../assets/images/star-empty.png') + ')'
                    }
                })
            }
        }
    },
    filters:{
        unitToWan(val) {
            val /= 10000
            return val.toFixed(1)
        },
        format1(val) {
            if (isNaN(val) || val === undefined || val === null) {
                return null
            }
            return Math.round(val * 10) / 10
        }
    },
    computed:{

    },
    components:{
        loadAnimate,
        scroll,
        shortReview,
        messageBox,
        allReviews,
        chapterCategory
    },
    created(){
        // this.getBookDetail()
    },
    mounted() {
        this.getBookDetailInit()
    }
}
</script>

<style lang='scss' scoped>
    @import '../assets/styles/global.scss';
    .book-detail {
        position: relative;
        width:100%;
        height:100vh;
        // background-color: pink;
        .content {
            width:100%;
            height: 100%;
            // background-color: pink;
            .content-wrap {
                position: relative;
                .bg-img {
                    width:100%;
                    height: px2rem(300);
                    overflow: hidden;
                    img {
                        width:100%;
                    }
                }
                .book-detail-wrap {
                    position:absolute;
                    top:0;
                    left:0;
                    z-index:99;
                    min-height:100%;
                    width:100%;
                    background-image: linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,1) px2rem(200),#eee px2rem(200),#eee);
                    .book-info  {
                        padding: px2rem(48) px2rem(15) 0;
                        width:100%;
                        display: flex;
                        box-sizing:border-box;
                        .left {
                            flex:0 0 px2rem(100);
                            img {
                                width:100%;
                            }
                        }
                        .right {
                            font-size:px2rem(16);
                            color:#333;
                            margin-left: px2rem(15);
                            display: flex;
                            flex-direction:column;
                            justify-content:center;
                            .title {
                                font-weight: bold;
                            }
                            .author {
                                font-size:px2rem(14);
                                color:skyblue;
                                margin:px2rem(10) 0;
                            }
                            .words-count {
                                font-size: px2rem(12);
                                color:#ccc;
                            }
                        }
                    }
                    .score-wrap {
                        display: flex;
                        justify-content: space-around;
                        align-items:center;
                        height:px2rem(60);
                        // background-color: pink;
                        font-size:px2rem(10);
                        background-color: #fff;
                        color:#ccc;
                        .item {
                            flex-direction:column;
                            @include center;
                        }
                        .top {
                                margin-bottom:px2rem(5);
                                color:#333;
                                .bold {
                                    font-size:px2rem(16);
                                    font-weight:700;
                                }
                            }
                        .star-wrap  {
                            .bottom {
                                color:#ccc;
                                span {
                                    width:px2rem(16);
                                    height:px2rem(16);
                                    margin:0 px2rem(2);
                                    display: inline-block;
                                    // background-image: url(../assets/images/star.png);
                                    background-size:px2rem(16) px2rem(16);
                                    // background-position-y:px2rem(-16);
                                }
                            }
                        }
                    }
                    .book-intro {
                        position:relative;
                        padding:0 px2rem(15);
                        background-color: #fff;
                        font-size:px2rem(14);
                        color:#666;
                        .intro-wrap {
                            position: relative;
                            border-top:px2rem(0.5) solid #eee;
                            &.fold {
                                @include fold2;
                            }
                            .text {
                                margin-top:px2rem(20);
                                line-height: px2rem(20);
                            }
                            .fold-text {
                                position:absolute;
                                right:0;
                                bottom:0;
                                z-index: 100;
                                // padding-left:px2rem(5);
                                background-color: #fff;
                                color:skyblue;
                                line-height: px2rem(20);
                                font-size: px2rem(14);
                                box-shadow: px2rem(-5) 0 px2rem(2) px2rem(2) #fff;
                            }
                        }
                        .last-chapter {
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            margin-top:px2rem(20);
                            border-top:px2rem(0.5) solid #eee;
                            padding:px2rem(15) 0;
                            font-size:px2rem(16);
                            color:#333;
                            .left {
                                font-weight:bold;
                            }
                            .right {
                                display: flex;
                                font-size:px2rem(10);
                                line-height: px2rem(16);
                                .update {
                                    color:red;
                                }
                                .chapter {
                                    margin:0 px2rem(5);
                                    width:px2rem(120);
                                    @include ellipsis1;
                                }
                            }
                        }
                    }
                    .short-review {
                        margin-top:px2rem(8);
                        background-color: #fff;
                    }
                    .copyright {
                        background-color: #fff;
                        padding:px2rem(10) px2rem(15);
                        margin:px2rem(8) 0 px2rem(56) 0;
                        font-size:px2rem(14);
                        color:#333;
                        .content {
                            margin-top:px2rem(10);
                            font-size: px2rem(12);
                            color:#666;
                            line-height:px2rem(18);
                        }
                    }
                }
            }
        }
        .title-bar {
            position: fixed;
            top:0;
            left:0;
            z-index: 105;
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:px2rem(48);
            background-color: #fff;
            box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, 0.1);
            &.bg-transparent {
                background-color: transparent;
                box-shadow: none;
            }
            width:100%;
            font-size:px2rem(24);
            z-index: 100;
            .left {
                display: flex;
                align-items:center;
                margin-left:px2rem(6);
                color:#444;
                .book-title {
                    font-size:px2rem(16);
                    font-weight: 700;
                    margin-left: px2rem(10);
                    line-height: px2rem(20);
                }
            }
            .right {
                display: flex;
                align-items: center;
                padding-right: px2rem(6);
                .heart-wrap {
                    margin-right:px2rem(12);
                }
                span {
                    margin-right:px2rem(12);
                    color:#444;
                }
                span:first-child {
                    font-size:px2rem(20);
                    font-weight: 700;
                    margin-right:px2rem(20)
                }
                span:last-child {
                    margin-right: 0;
                }
            }
        }
        .loading-wrap {
            position: absolute;
            background-color: #fff;
            top:px2rem(48);
            left:0;
            width:100%;
            height:calc(100vh - #{px2rem(48)});
            z-index:100;
            .loading {
                position:absolute;
                top:40%;
                height: px2rem(40);
                width:100%;
                overflow: hidden;
            }
            .text {
                position: absolute;
                top:40%;
                width:100%;
                font-size:px2rem(12);
                color:#ccc;
                z-index:100;
                text-align:center;
                transform: translate(px2rem(8) ,px2rem(40));
            }
        }
        .footer {
            display:flex;
            position: fixed;
            left:0;
            bottom:0;
            z-index:105;
            width:100%;
            height:px2rem(56);
            background-color: #fff;
            font-size:px2rem(12);
            color:#ff9900;
            box-shadow: 0 px2rem(-2) px2rem(2) 0 rgba(0, 0, 0, 0.1);
            div {
                @include center;
                flex-direction: column;
                justify-content:space-evenly;
                span[class^="icon"] {
                    font-weight: 700;
                }
            }
            .add {
                display: flex;
                flex:1;
                .icon-wrap {
                    @include center;
                    padding:px2rem(1);
                    border-radius: 50%;
                    border:px2rem(1.5) solid #ff9900;
                }
            }
            .read {
                flex:1;
                color: #fff;
                background-color: #ff9900;
                span:first-child {
                    font-size:px2rem(18)
                }
            }
            .download {
                flex:1;
                span:first-child {
                    font-size:px2rem(18)
                }
            }
        }
    }
</style>