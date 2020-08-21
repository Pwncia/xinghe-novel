<template>
    <div class="book-store">
        <div class="top-nav">
            <div class="nav-item-wrap">
                <div 
                class="nav-item" 
                v-for="(item, index) in bookList" 
                :key="index" 
                :class="{actived:index === currentConIndex}"
                @click="toggleCat(index)"
                >
                    {{item.title}}
                </div>
            </div>
            <div class="search-icon" @click="goBookSearch">
                <span class="icon-search"></span>
            </div>
        </div>
        <male-cat :gender='currentBigCate'  ref="maleCat"></male-cat>
        <!-- <div class="book-shelf-btn">
            <span class="icon-book-store"></span>
        </div> -->
    </div>
</template>

<script>
import maleCat from '@/components/bookstore/maleCat.vue'
import {bookStoreMixin} from '@/utils/mixin.js'
export default {
    mixins:[bookStoreMixin],
    data(){
        return {
            bookList:[
                {
                    title: '男生',
                    name:'male'
                }, 
                {
                    title: '女生',
                    name:'female'
                },
                {
                    title: '图书',
                    name:'press'
                },
                {
                    title: '漫画',
                    name:'picture'
                }
                ],
            currentBigCate:'male',
            currentConIndex:0,
            isBookSearchShow:false
        }
    },
    methods:{
        hideBookSearch(){
            this.isBookSearchShow = false
        },
        toggleCat(val) {
            this.currentConIndex = val
            this.currentBigCate = this.bookList[val].name
            console.log(this.currentBigCate)
            this.freshCate()
        },
        goBookSearch() {
            this.$router.push('/booksearch')
        },
        //重置cate组件部分参数
        freshCate(){
            this.$refs.maleCat.subNum = -1
            this.$refs.maleCat.bookListData = ''
            this.$refs.maleCat.idFlag = false
            this.$refs.maleCat.rankId._id = ''
            this.$refs.maleCat.rankId.monthRank = ''
            this.$refs.maleCat.rankId.totalRank = ''
        },
        //获取排行榜类型
        async getRank() {
            const res = await this.$http.get('/api/ranking/gender')
            if (res.status === 200) {
              this.setRankList(res.data)
            }
        },
        //获取子分类信息
        async getSubCate() {
          const res = await this.$http.get('/api/cats/lv2/statistics')
          if (res.status === 200) {
            this.setCateList(res.data)
          }
        },
        //获取子分类的子分类
        async getMinorCate(){
            const res = await this.$http.get('/api/cats/lv2')
            if (res.status === 200) {
                this.setMinorCate(res.data)
            }
        },
        getBookStoreData() {
            this.getRank()
            this.getSubCate()
            this.getMinorCate()
        }
    },
    components:{
        // bookSearch,
        maleCat
        // pressCat,
        // comicCate
    },
    mounted() {
        this.getBookStoreData()
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.book-store {
    width:100%;
    height: calc(100vh - #{px2rem(48)});
    display: flex;
    flex-direction: column;
    .top-nav {
        display: flex;
        height: px2rem(48);
        border-bottom: px2rem(1) solid #eee;
        .nav-item-wrap {
            display: flex;
            flex:1;
            justify-content:space-around;
            align-items:center;
            font-size:px2rem(14);
            color:#666;
            .nav-item{
                padding:px2rem(3) 0;
                &.actived {
                    color:#000;
                    font-size:px2rem(16);
                    font-weight:700;
                    border-bottom: px2rem(2) solid #ff8800;
                }
            }
        }
        .search-icon {
            @include center;
            width:px2rem(42);
            font-size:px2rem(16);
            font-weight: 700;
            color:#000;
        }
    }
    .book-shelf-btn {
       @include center; 
        position: fixed;
        bottom:px2rem(120);
        right:px2rem(30);
        width:px2rem(40);
        height:px2rem(40);
        background-color: #fa8e30;
        font-size:px2rem(20);
        font-weight: 700;
        border-radius: 50%;
        color: #eee;
        // box-shadow: px2rem(2) px2rem(2) px2rem(2) 0 rgb(200, 200, 200);
        box-shadow: px2rem(0) px2rem(0) px2rem(4) 0 rgba(10, 10, 10,.5);
    }
}
</style>