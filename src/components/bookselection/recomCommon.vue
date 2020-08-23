<template>
    <div class="recom-common">
        <div class="head">
            <div class="title">{{title}}</div>
            <div class="change" @click="changeBookList">
                <span class="icon-change"></span>
                <span>换一换</span>
            </div>
        </div>
        <div class="content">
            <div class="book-item" @click="goBookDetial(item._id)" v-for="(item,index) in bookList" :key="index">
                <div class="cover">
                    <img v-lazy="coverPath(item.cover)" alt="">
                </div>
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['allBookList', 'title'],
    data(){
        return {
           bookList:'' 
        }
    },
    methods:{
        goBookDetial(id) {
            this.$router.push('/bookdetail/' + id)
        },
        coverPath(str) {
            return this.urlDecode(str.substr(7))
        },
        changeBookList() {
            this.bookList = this.setBookList(this.allBookList)
        },
        //处理书籍列表
        setBookList(allBookList){
            if (allBookList) {
                let i = 0
                let arr = []
                let boookArr = []
                while (i < 8) {
                   let random = Math.floor(Math.random() * allBookList.length)
                   if (arr.indexOf(random) === -1) {
                       arr.push(random)
                       i++
                   }
                }
                arr.forEach(item => {
                    boookArr.push(allBookList[item])
                })
                return boookArr
            }
            else {
                return ''
            }
        }
    },
    watch:{
        allBookList(val){
            this.bookList = this.setBookList(val)
        }
    },
    mounted(){
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.recom-common {
    width:100%;
    color:#333;
    font-size:px2rem(16);
    font-weight: 700;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: px2rem(20);
        .change {
            @include center;
            font-size: px2rem(12);
            color: #bbb;
            span:first-child {
                margin-right:px2rem(6)
            }
        }
    }
    .content {
        display: flex;
        flex-flow: row wrap;
        width:100%;
        .book-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: px2rem(305/4);
            font-size: px2rem(12);
            margin:px2rem(5);
            img {
                width: 100%;
                border-radius: px2rem(4);
                height:px2rem(305/3)
            }
            &.book-item:nth-child(4n+1) {
                margin-left: 0;
            }
            &.book-item:nth-child(4n) {
                margin-right: 0;
            }
            .title {
                margin-top:px2rem(10);
                color: #333;
                @include ellipsis1;
            }
        }
    }
}
</style>