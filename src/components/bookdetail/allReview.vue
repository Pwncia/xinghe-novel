<template>
    <div class="reviews">
        <div class="title-bar">
            <span class="icon-back" @click="back"></span>
            <span class="title">全部书评</span>
        </div>
        <div class="content">
            <scroll>
                <div class="reviwes">
                    <reviews-list :reviewsObj="reviewsObj"></reviews-list>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
import scroll from '../scroll'
import reviewsList from './reviewsList'
export default {
    props:['reviewsObj'],
    components:{
        scroll,
        reviewsList
    },
    methods:{
        back() {
            this.$emit('all-reviews-hide')
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.reviews {
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height: 100vh;
    z-index: 107;
    background-color: #fff;
    .title-bar {
        position: relative;
        font-size:px2rem(24);
        height: px2rem(48);
        color: #333;
        border-bottom:px2rem(0.5) solid #eee;
        span:first-child {
            position: absolute;
            top:50%;
            left:0;
            transform: translateY(-50%);
            margin-left:px2rem(5)
        }
        span:last-child {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size:px2rem(16);
            font-weight:700;
        }
    }
    .content {
        width:100%;
        height:calc(100vh - #{px2rem(48)})
    }
}
</style>