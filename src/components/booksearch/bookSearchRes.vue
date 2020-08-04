<template>
    <div class="book-search-res">
        <scroll ref="scroll">
            <div class="reslist">
                <div class="reslist-item" v-for="(item, index) in bookList" :key="index"
                @click="goBookDetail(item._id)">
                    <div class="cover">
                        <img :src="getCoverPath(item.cover)" alt="">
                    </div>
                    <div class="info">
                        <div class="title" v-html="searchBright(item.title,item.highlight.title)"></div>
                        <div class="short-intro" v-html="searchBright(item.shortIntro,item.highlight.shortIntro)"></div>
                        <div class="author-tag">
                            <span v-html="searchBright(item.author,item.highlight.author)"></span>
                            <span>{{item.cat}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import scroll from '../scroll'
export default {
    props:['searchResList'],
    methods:{
        getCoverPath(str) {
            return this.urlDecode(str.substr(7))
        },
        searchBright(content, keyWrods) {
            if (keyWrods && keyWrods.length > 0){
                keyWrods.forEach(item => {
                    let reg = new RegExp(item, 'g')
                    let str = '<font color="#ff9900">' + item + '</font>'
                    content = content.replace(reg, str)
                })
                return content
            }
            else {
                return content
            }
        },
        scrollRefresh() {
            return this.$refs.scroll.scrollTo(0, 0)
        },
        //书本详情页
        goBookDetail(id) {
            this.$router.push(`/bookdetail/${id}`)
        }
    },
    computed:{
        bookList() {
            return this.searchResList.slice(0, 10)
        }
    },
    components:{
        scroll
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.book-search-res {
    position: absolute;
    top:0;
    left:0;
    background-color: #fff;
    z-index: 99;
    width:100%;
    height:100%;
    .reslist {
        width:100%;
        height: 100%;
        font-size:px2rem(16);
        .reslist-item {
            padding:0 px2rem(15);
            display: flex;
            align-items:center;
            height: px2rem(112);
            margin-bottom: px2rem(10);
            .cover {
                flex:0 0 px2rem(80);
                img {
                    width:100%;
                }
                margin-right: px2rem(15);
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content:space-around;
                height:100%;
                flex:1;
                .title {
                    font-size: px2rem(14);
                }
                .short-intro {
                    line-height: px2rem(14);
                    font-size: px2rem(12);
                    color:#999;
                    @include ellipsis;
                }
                .author-tag {
                    display: flex;
                    justify-content:space-between;
                    font-size: px2rem(10);
                    color: #aaa;
                    span {
                        @include center;
                    }
                    span:last-child {
                        padding:px2rem(3);
                        border:px2rem(0.5) solid #999;
                        border-radius:px2rem(4);
                    }
                }
            }
        }
    }
}
</style>