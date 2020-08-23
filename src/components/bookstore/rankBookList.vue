<template>
  <div class="rank-book">
      <!-- <scrollWrap></scrollWrap> -->
      <div class="book-item-wrap" v-for="(item, index) in bookListData.books"
      :key="index" @click="goBookDetail(item._id)">
          <div class="book-cover">
              <img v-lazy="getCoverPath(item.cover)">
          </div>
          <div class="book-info-wrap">
              <div class="title">{{index+1+'.'+item.title}}</div>
              <div class="intro">{{item.shortIntro}}</div>
              <div class="info">
                  <span class="author">{{item.author}}</span>
                  <span class="cate">{{item.minorCate}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['bookListData'],
    componets:{
    },
    methods:{
        goBookDetail(bookId){
            this.$router.push('/bookdetail/' + bookId)
        },
        getCoverPath(str) {
            str = str.substr(7)
            return this.urlDecode(str)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.rank-book {
    height: 100%;
    width:100%;
    padding-left:px2rem(1);
    .book-item-wrap {
        display: flex;
        align-items: center;
        width:100%;
        height:px2rem(96);
        .book-cover {
            width:px2rem(60);
            img {
                display: block;
                width:100%;
            }
        }
        .book-info-wrap {
            flex:1;
            margin-left: px2rem(15);
            font-size: px2rem(14);
            color:#000;
            .intro {
                @include ellipsis;
                font-size:px2rem(12);
                line-height: px2rem(16);
                margin:px2rem(8) 0;
                color:#888;
                letter-spacing: 1px;
            }
            .info {
                display: flex;
                justify-content:space-between;
                color:#bbb;
                .author {
                    font-size: px2rem(10);
                    @include center;
                }
                .cate {
                    font-size: px2rem(8);
                    background-color: #ebe9e871;
                    color:#666;
                    padding:px2rem(6);
                    border-radius:px2rem(12)
                }
            }
        }
    }
}
</style>