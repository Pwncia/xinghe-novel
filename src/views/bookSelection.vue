<template>
    <div class="book-selection">
        <div class="title-bar">
            <span class="title">精选</span>
            <span class="icon-search" @click="$router.push('/booksearch')"></span>
        </div>
        <div class="content">
            <scroll :scrollDirection='1'>
                <div class="banner">
                   <swiper ref="mySwiper" :options="swiperOptions">
                       <swiper-slide>
                          <img src="../assets/images/banner1.jpg" alt="">
                       </swiper-slide>
                       <swiper-slide>
                         <img src="../assets/images/banner2.jpg" alt="">
                       </swiper-slide>
                       <swiper-slide>
                          <img src="../assets/images/banner3.jpg" alt="">
                       </swiper-slide>
                   </swiper> 
                </div>
                <div class="today-recom">
                    <today-recom :todayBookList="todayBookList"></today-recom>
                </div>
                <div class="hot-popular common">
                    <recomCommon :allBookList="hotPopBookList" :title="'火热人气榜'" @change-booklist="setBookList(todayBookList)"></recomCommon>
                </div>
                <div class="end-recom common">
                    <recom-common :allBookList="endRecomBookList" :title="'完结热推'"></recom-common>
                </div>
                <div class="urban-recom common">
                    <recom-common :allBookList="urbanRecomBookList" :title="'都市爽文'"></recom-common>
                </div>
                <div class="romance-recom common">
                    <recom-common :allBookList="romanceRecomBookList" :title="'心动现言小说'"></recom-common>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
import scroll from '../components/scroll'
import todayRecom from '../components/bookselection/todayRecom'
import recomCommon from '../components/bookselection/recomCommon'

export default {
    data(){
        return {
            swiperOptions:{
                direction:'horizontal',
                autoplay:{
                    disabaleOnInteraction:false
                },
                speed:1000,
                loop : true
            },
            todayBookList:'',
            hotPopBookList:'',
            endRecomBookList:'',
            urbanRecomBookList:'',
            romanceRecomBookList:''
        }
    },
    methods:{
        //获取今日推荐书籍
        async getTodayBookList() {
            const res = await this.$http.get('/api/ranking/54d42d92321052167dfb75e3')
            if (res.status === 200) {
                this.todayBookList = res.data.ranking.books
            }
        },
        //获取人气热榜书籍
        async getHotPopBookList() {
            const res = await this.$http.get('/api/ranking/5a6844f8fc84c2b8efaa8bc5')
            if (res.status === 200) {
                this.hotPopBookList = res.data.ranking.books
            }
        },
        //获取完结热推书籍
        async getEndRecomBookList() {
            const res = await this.$http.get('/api/ranking/564eb878efe5b8e745508fde')
            if (res.status === 200) {
                this.endRecomBookList = res.data.ranking.books
            }
        },
        //获取都市爽文 
        async getUrbanRecomBookList() {
            const res = await this.$http.get('/api/book/by-categories', {
                params:{
                    gender:'male',
                    type:'hot',
                    major:'都市',
                    start:0,
                    limit:100
                }
            })
            if (res.status === 200) {
                this.urbanRecomBookList = res.data.books
            }
        },
        //获取现言小说
        async getRomanceRecomBookList() {
            const res = await this.$http.get('/api/book/by-categories', {
                params:{
                    gender:'female',
                    type:'hot',
                    major:'现代言情',
                    start:0,
                    limit:100
                }
            })
            if (res.status === 200) {
                this.romanceRecomBookList = res.data.books
            }
        }
    },
    components:{
        scroll,
        todayRecom,
        recomCommon
    },
    mounted() {
        this.getTodayBookList()
        this.getHotPopBookList()
        this.getEndRecomBookList()
        this.getUrbanRecomBookList()
        this.getRomanceRecomBookList()
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
.book-selection {
    width:100vw;
    height:100vh;
    .title-bar {
        position:relative;
        width:100%;
        height:px2rem(42);
        font-size:px2rem(16);
        span:first-child {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-weight: 700;
        }
        span:last-child {
            position:absolute;
            top:50%;
            right:0;
            transform:translate(0,-50%);
            margin-right:px2rem(15)
        }
    }
    .content {
        width:100%;
        height:calc(100vh - #{px2rem(90)});
        box-sizing:border-box;
        .banner {
            width:100%;
            height:px2rem(136);
            padding:0 px2rem(20);
            box-sizing:border-box;
            margin:px2rem(10) 0 px2rem(20) 0;
            img {
                width: 100%;
                border-radius: px2rem(15);
            }
        }
        .today-recom {
            width:100%;
            padding:0 px2rem(15);
            box-sizing: border-box;
        }
        .common {
            width:100%;
            padding:0 px2rem(20);
            margin-top:px2rem(30); 
            box-sizing: border-box;
        }
        .romance-recom {
            margin-bottom: px2rem(20);
        }
    }
}
</style>