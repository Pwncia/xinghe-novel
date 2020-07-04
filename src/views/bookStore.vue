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
            <div class="search-icon">
                <span class="icon-search"></span>
            </div>
        </div>
        <!-- <component :is=currentCon></component> -->
        <femaleCat v-show="currentConIndex === 1">
        </femaleCat>
        <maleCat v-show="currentConIndex === 0"></maleCat>
    </div>
</template>

<script>
import maleCat from '@/components/bookstore/maleCat.vue'
import femaleCat from '@/components/bookstore/femaleCat.vue'
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
                }],
            currentBigCate:'male',
            currentConIndex:0
        }
    },
    methods:{
        toggleCat(val) {
            this.currentConIndex = val
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
        getRankAndSubCate() {
            this.getRank()
            this.getSubCate()
        }
    },
    components:{
        femaleCat,
        maleCat
    },
    mounted() {
        this.getRankAndSubCate()
        console.log(1)
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.book-store {
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .top-nav {
        display: flex;
        height: px2rem(42);
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
}
</style>