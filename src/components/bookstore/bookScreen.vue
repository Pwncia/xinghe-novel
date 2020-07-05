<template>
    <div class="book-screen">
        <div class="content">
            <div class="order">
                <div class="title">
                    <span>排序</span>
                    <div class="close" @click="close">
                        <span>收起</span>
                        <span class="icon-up"></span>
                    </div>
                </div>
                <div class="options-wrap">
                    <span class="tag" v-for="(item, index) in orderType" :key="index">{{item.title}}</span>
                </div>
            </div>
            <div class="minor-cate">
                <div class="title">分类标签</div>
                <div class="options-wrap">
                    <span class="tag"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderType:[
                {title:'新书', name:'new'},
                {title:'好评', name:'repulation'},
                {title:'完结', name:'over'},
                {title:'包月', name:'month'}
            ],
            minorCateData:[]
        }
    },
    methods:{
        close() {
            this.$emit('bookScreenhide')
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
    .book-screen {
        position: absolute;
        display: flex;
        flex-direction: column;
        top:0;
        left: 0;
        width:100%;
        height: 50vh;
        z-index: 101;
        background-color: pink;
        .content {
            padding:20px px2rem(15) 0;
            .tag {
                font-size: px2rem(10);
                padding:px2rem(5) px2rem(20);
                background-color: #ebe9e871;
                margin:0 px2rem(5);
                border-radius: px2rem(24);
                color:#666;
            }
            .order {
                margin-bottom: px2rem(30);
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: px2rem(15);
                    .close {
                        color:#ff9900;
                        span:first-child {
                            margin-right:5px;
                        }
                    }
                }
            }
            .minor-cate {
                .title {
                    margin-bottom: px2rem(15);
                }
            }
        }
    }
</style>