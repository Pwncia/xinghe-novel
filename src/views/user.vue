<template>
    <div class="user">
        <div class="user-info">
            <img src="../assets/images/logo.png" alt="">
            <div class="text">ID:234759753</div>
        </div>
        <div class="features">
            <div class="feature-item" v-for="(item,index) in featureList" :key="index">
                <span>{{item.title}}</span>
                <span class="icon-forward"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            featureList:[
                {
                    title:'意见反馈'
                },
                {
                    title:'浏览记录'
                },
                {
                    title:'想读'
                },
                {
                    title:'关于我们'
                },
                {
                    title:'常见问题'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    @import '../assets/styles/global.scss';
    .user {
        width:100%;
        height: calc(100vh - #{px2rem(48)});
        .user-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size:px2rem(16);
            font-weight: 700;
            height:px2rem(160);
            color: #333;
            img {
                width:px2rem(60);
                margin-bottom:px2rem(10);
            }
        }
        .features {
            width:100%;
            padding:0 px2rem(15);
            font-size:px2rem(14);
            box-sizing: border-box;
            .feature-item {
                display: flex;
                height: px2rem(32);
                justify-content:space-between;
                align-items: center;
                border-bottom: px2rem(1) solid #eee;
                span:last-child{
                    color:#ccc;
                }
                &.feature-item:last-child{
                    border-bottom: none;
                }
            }
        }
    }
</style>