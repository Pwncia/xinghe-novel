<template>
    <div class="review-wrap">
        <div class="head">
            <div class="title">热门短评</div>
            <div class="more">
                <span>查看更多 {{totalReviews}}</span>
                <span class="icon-forward"></span>
            </div>
        </div>
        <div class="review-item" v-for="(item, index) in reviewsObj.reviews" :key="index">
            <div class="author-wrap">
                <div class="avatar">
                    <img :src="avatarPath(item.author.avatar)" alt="">
                </div>
                <div class="nick-name">{{item.author.nickname}}</div>
                <div class="author-level">Lv.{{item.author.lv}}
                </div>
            </div>
            <div class="content-wrap">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['reviewsObj'],
    data(){
        return {
        }
    },
    methods:{
        avatarPath(str) {
            return 'http://statics.zhuishushenqi.com/' + str
        }
    },
    computed:{
        totalReviews(){
            return '(' + this.reviewsObj.total + '条)'
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
    .review-wrap {
        width:100%;
        height: 100%;
        padding:0 px2rem(15);
        box-sizing:border-box;
        overflow: hidden;
        .head {
            display: flex;
            justify-content:space-between;
            align-items:center;
            height:px2rem(40);
            font-size: px2rem(16);
            color:#333;
            .title {
                font-weight:700;
            }
            .more {
                @include center;
                font-size:px2rem(10);
                span:first-child {
                    margin-right:px2rem(5);
                };
            }
        }
        .review-item {
            font-size:px2rem(12);
            border-top:px2rem(0.5) solid #eee;
            .author-wrap {
                display: flex;
                align-items:center;
                margin-top:px2rem(10);
                color: #aaa;
                .avatar {
                    width:px2rem(28);
                    height: px2rem(28);
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                        width:100%;
                    }
                }
                .nick-name {
                    margin:0 px2rem(10);
                }
                .author-level {
                    padding:px2rem(2) px2rem(4);
                    border:px2rem(0.5) solid #eee;
                    font-size:px2rem(10);
                    border-radius:px2rem(14);
                }
            }
            .content-wrap {
                font-size:px2rem(14);
                color:#333;
                .title {
                    margin:px2rem(10) 0;
                }
                .content {
                    margin:px2rem(10) 0;
                    font-size:px2rem(12);
                    line-height: px2rem(14);
                    color:#666;
                }
            }
        }
    }
</style>