<template>
    <div class="today-recom-wrap">
        <div class="title">
            <span class="line"></span>
            <span class="text">今日推荐</span>
            <span class="line"></span>
        </div>
        <div class="content">
            <scroll :scrollDirection='0' ref="scroll">
                <div class="content-wrap">
                    <div class="book-item" @click="goBookDetial(item._id)" v-for="(item, index) in bookList" :key="index">
                        <span class="book-cover">
                            <img v-lazy="coverPath(item.cover)" alt="">
                        </span>
                        <span class="book-title">{{item.title}}</span>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
import scroll from '../scroll'
export default {
    props:['todayBookList'],
    data(){
        return {
            // books:''
        }
    },
    components:{
        scroll
    },
    methods:{
        goBookDetial(id) {
            this.$router.push('/bookdetail/' + id)
        },
        coverPath(str) {
            return this.urlDecode(str.substr(7))
        }
    },
    computed:{
        bookList(){
            if (this.todayBookList) {
                let i = 0
                let arr = []
                let boookArr = []
                while (i < 8) {
                   let random = Math.floor(Math.random() * this.todayBookList.length)
                   if (arr.indexOf(random) === -1) {
                       arr.push(random)
                       i++
                   }
                }
                arr.forEach(item => {
                    boookArr.push(this.todayBookList[item])
                })
                return boookArr
            }
            else {
                return ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.today-recom-wrap {
    width:100%;
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: px2rem(16);
        margin-bottom:px2rem(10);
        color:#333;
        font-size:px2rem(16);
        font-weight: 700;
        .line {
            width:px2rem(10);
            border-top:px2rem(1) solid #333
        }
        .text {
            margin:0 px2rem(5)
        }
    }
    .content {
        .content-wrap {
            display: flex;
            width:215%;
            .book-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size:px2rem(12);
                line-height: px2rem(14);
                width:px2rem(82);
                margin:0 px2rem(5);
                img {
                    width:100%;
                    height:px2rem(82*800/600);
                    margin:px2rem(10) 0;
                    border-radius:px2rem(4);
                }
                .book-title {
                    @include ellipsis1
                }
            }
        }
    }
}
</style>