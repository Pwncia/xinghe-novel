<template>
  <div class="female-cat" ref="femaleCat">
      <div class="nav">
        <scroll>
            <div>
                <div class="all-cat" :class="{actived:subNum === -1}"
                @click="toggleRank(0,-1)">
                  <span>全部分类</span>
                </div>
                <div class="rank-cat-item"
                  v-for="(item,index) in rankList"
                  :key="index"
                  :class="{actived:subNum === index}"
                  @click="toggleRank(item._id, index)">
                  <span>{{item.shortTitle}}</span>
                </div>
            </div>
        </scroll>
      </div>
      <div class="content">
        <scroll>
          <sub-cat :cateList='subCateList'></sub-cat>
        </scroll>
      </div>
  </div>
</template>

<script>
import scroll from '../scroll.vue'
import subCat from './subCat.vue'
export default {
    props:['rankList', 'subCateList', 'isBigCateChange'],
    data(){
      return {
        subNum:-1,
        //子分类数据
        bookList:null
      }
    },
    components:{
      scroll,
      subCat
    },
    methods:{
      freshSubNum() {
        if (this.isBigCateChange) {
          this.subNum = -1
          this.$emit('finishFreshSubNum')
        }
      },
      //切换榜单
      toggleRank(rankId, index) {
        this.subNum = index
        //点击榜单
        if (index !== -1) {
            this.getBookListByRankId(rankId)
        }
        else {
          return false
        }
      },
      //获取排行榜书籍
      async getBookListByRankId(rankId) {
        const res = await this.$http.get('/api/ranking/' + rankId)
        if (res.status === 200) {
          this.bookList = res.data.ranking.books
        }
        console.log(this.bookList)
      }
    },
    updated() {
      this.freshSubNum()
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.female-cat {
  display: flex;
    width:100%;
    height:px2rem(667-43);
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
      flex:1;
      margin-left:15px;
    }
}
</style>