<template>
  <div class="male-cat">
      <div class="nav">
        <scroll :hideSlideBar="true">
            <div>
                <div class="all-cat" :class="{actived:subNum === -1}"
                @click="toggleRank(0,-1)">
                  <span>全部分类</span>
                </div>
                <div class="rank-cat-item"
                  v-for="(item,index) in rankList[rankCate]"
                  :key="index"
                  :class="{actived:subNum === index}"
                  @click="toggleRank(item._id, index)">
                  <span>{{item.shortTitle}}</span>
                </div>
            </div>
        </scroll>
      </div>
      <div class="content">
          <sub-cat 
          :cateList='cateList[gender]' 
          v-show="subNum === -1"
          @cateBookListShow=showCateBookList>
          </sub-cat>
          <div class="rank-book-wrap"  v-show="subNum !== -1">
              <div class="option-bar">
                  <span v-for="(item, index) in optionData"
                  :key="index"
                  :class="{actived:optionId === index}"
                  @click="changeBookListOrder(item.name, index)">{{item.title}}</span>
              </div>
              <scroll ref="rankBook" :hideSlideBar="true">
                <load-animate v-show="isLoadShow"></load-animate>
                <rank-book :bookListData='bookListData'></rank-book>
              </scroll>
          </div>
      </div>
      <book-list-cate 
      v-show="isCateBookShow" 
      @hideBookListCate='hiddenCateBook'
      @query-booklist='queryBookList' 
      @up-pull = 'upPullGetBook'
      :bookData="cateBookData"
      :queryInfo="queryInfo">
      </book-list-cate>
  </div>
</template>

<script>
import loadAnimate from '../loadAnimate'
import scroll from '../scroll.vue'
import subCat from './subCat.vue'
import rankBook from './rankBookList'
import bookListCate from './bookListByCate'
import {bookStoreMixin} from '@/utils/mixin.js'
export default {
    props:['gender'],
    mixins:[bookStoreMixin],
    data(){
      return {
        isCateBookShow:false,
        subNum:-1,
        bookListData:'',
        cateBookData:'',
        optionData:[
          {title:'周榜', name:'_id'},
          {title:'月榜', name:'monthRank'},
          {title:'总榜', name:'totalRank'}],
        optionId:0,
        rankId:{
          _id:'',
          monthRank:'',
          totalRank:''
        },
        //同一榜单第一次获取
        idFlag:false,
        //根据分类请求参数
        queryInfo: {
          gender:this.gender,
          type:'hot',
          major:this.major,
          start:0,
          limit:10,
          minor:''
        },
        pullFlag:false
      }
    },
    computed:{
        rankCate(){
          return this.gender === 'press' ? 'epub' : this.gender
        }
    },
    components:{
      scroll,
      subCat,
      rankBook,
      loadAnimate,
      bookListCate
    },
    methods:{
      //根据分类请求小说列表
        async getBookList() {
            const res = await this.$http.get('/api/book/by-categories', {params:this.queryInfo})
            if (res.status === 200) {
                if (this.pullFlag) {
                  this.cateBookData.books = [...this.cateBookData.books, ...res.data.books]
                }
                else {
                 this.cateBookData = res.data
                }
            }
            this.pullFlag = false
        },
        //更改请求参数并重新请求小说列表
        queryBookList(mins, type) {
              this.queryInfo.minor = mins
              this.queryInfo.type = type
              this.pullFlag = false
              this.getBookList()
        },
        upPullGetBook() {
            this.queryInfo.start += this.queryInfo.limit
            this.pullFlag = true
            this.getBookList()
        },
      showCateBookList(major) {
        this.isCateBookShow = true
        this.queryInfo.major = major
        this.getBookList(this.pullFlag)
      },
      hiddenCateBook() {
        this.isCateBookShow = false
        //重置请求参数
        this.queryInfo.type = 'hot'
        this.queryInfo.minor = ''
        this.queryInfo.start = 0
        this.queryInfo.limit = 10
      },
      //切换榜单
      toggleRank(rankId, index) {
        this.optionId = 0
        this.idFlag = true
        this.subNum = index
        //点击榜单
        if (index !== -1) {
            this.getBookListByRankId(rankId)
        }
        else {
          return false
        }
      },
      //切换榜单书籍排序
      changeBookListOrder(val, i) {
        this.idFlag = false
        this.optionId = i
          this.getBookListByRankId(this.rankId[val])
      },
      //获取排行榜书籍
      async getBookListByRankId(rankId) {
        if (!rankId) {
          return false
        }
        this.setIsLoadShow(true)
        const res = await this.$http.get('/api/ranking/' + rankId)
        if (res.status === 200) {
          this.bookListData = res.data.ranking
        }
        this.$refs.rankBook.scrollTo(0, 0)
        this.rankId._id = this.idFlag ? this.bookListData._id : this.rankId._id
        this.rankId.monthRank = this.bookListData.monthRank || this.rankId.monthRank
        this.rankId.totalRank = this.bookListData.totalRank || this.rankId.totalRank
        this.setIsLoadShow(false)
      }
    },
    mounted() {
    },
    watch: {
      gender:function(newVal, old) {
        this.queryInfo.gender = newVal
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.male-cat {
  display: flex;
    width:100%;
    height:100%;
    .nav {
      background-color: #eeeeef;
      width:px2rem(84);
      height:100%;
      .all-cat,
      .rank-cat-item {
        @include center;
        width:100%;
        height:px2rem(48);
        font-size:px2rem(14);
        color:#aaa;
        span {
          width:100%;
          display: block;
          height:px2rem(24);
          text-align:center;
          line-height:px2rem(24)
        }
        &.actived {
          background-color: #fff;
          color:#ff8800;
          span {
            border-left:px2rem(4) solid #ff8800
          }
        }
      }
    }
    .content {
      position: relative;
      flex:1;
      margin-left:15px;
      .rank-book-wrap {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-right: px2rem(10);
          .option-bar {
              width:100%;
              height: px2rem(36);
              display: flex;
              align-items:center;
              span {
                  width:px2rem(42);
                  height:px2rem(20);
                  background-color: #ebe9e871;
                  border-radius: px2rem(12);
                  font-size: px2rem(10);
                  @include center;
                  margin-right:px2rem(10);
                  color:#ccc;
                  &.actived {
                      background-color: #fde0bf;
                      color: #ff9900;
                  }
              }
          }
      }
    }
}
</style>