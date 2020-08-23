<template>
    <div class="book-shelf">
        <div class="book-shelf-title">
            <span :class="[isEditMode?'icon-bin':'icon-back']" @click="backOrdelete"></span>
            <div class="text-wrap">
                <span class="text">{{isEditMode?'书籍管理':'书架'}}</span>
                <span class="tips" v-show="isEditMode">已选中{{selectedList.length}}本书</span>
            </div>
            <span @click="toEdit" v-if="bookShelfList.length>0">{{isEditMode?'取消':'编辑'}}</span>
            <span class="icon-search" v-else @click="goSearch"></span>
        </div>
        <div class="book-shelf-list-wrap">
            <scroll v-if="bookShelfList.length > 0">
                <div class="book-shelf-list">
                    <div class="book-shelf-list-item" @click="tapBookItem(item,index)" v-for="(item,index) in bookShelfList" :key="index">
                        <div class="img-wrap">
                            <img v-lazy="coverPath(item.cover)" alt="">
                        </div>
                        <div class="title">{{item.title}}</div>
                        <div class="selected-wrap" v-show="isEditMode" :class="{selected:item.isSelected}">
                            <span class="icon-selected"></span>
                        </div>
                    </div>
                </div>
            </scroll>
            <div class="book-shelf-list-none" v-else>
                <div class="text">空荡荡的书架等你来填满~(*╹▽╹*)</div>
                <div class="btn" @click="goBookStore">去书城</div>
            </div>
        </div>
    </div>
</template>

<script>
import scroll from '../components/scroll'
import {getBookShelfList, deleteBookShelfList, setBookShelfList} from '../utils/localStorage'
export default {
    data(){
        return {
            bookShelfList:'',
            isEditMode:false,
            selectedList:[]
        }
    },
    methods:{
        goBookStore() {
            this.$router.push('/bookstore')
        },
        goSearch() {
            this.$router.push('/booksearch')
        },
        backOrdelete(){
            if (this.isEditMode) {
                if (this.selectedList.length > 0) {
                    deleteBookShelfList()
                    this.bookShelfList.forEach(item => {
                        let isSelected = this.selectedList.some(ele => item === ele)
                        if (!isSelected) {
                            setBookShelfList(item)
                        }
                    })
                    this.bookShelfList = getBookShelfList()
                    if (this.bookShelfList) {
                        this.isSelected = false
                    }
                    this.selectedList = []
                }
                return false
            }
            else {
                this.$router.go(-1)
            }
        },
        toEdit(){
            this.isEditMode = !this.isEditMode
            if (this.isEditMode) {
                this.selectedList = []
                this.bookShelfList = getBookShelfList()
            }
        },
        tapBookItem(obj, i) {
            if (this.isEditMode) {
                this.bookShelfList[i].isSelected = !this.bookShelfList[i].isSelected
                if (this.bookShelfList[i].isSelected) {
                   let flag = this.selectedList.some(item => {
                        return item.bookId === obj.id
                    })
                    if (!flag) {
                        this.selectedList.push(obj)
                    }
                }
                else {
                    this.selectedList = this.selectedList.filter(item => item.bookId !== obj.bookId)
                }
            }
            else {
                this.$router.push('/bookdetail/' + obj.bookId)
            }
        },
        coverPath(str) {
            return this.urlDecode(str.substr(7))
        }
    },
    components:{
        scroll
    },
    mounted(){
       this.bookShelfList = getBookShelfList()
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
.book-shelf {
    width:100vw;
    height: calc(100vh - #{px2rem(48)});
    .book-shelf-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:px2rem(42);
        background-color: #fff;
        font-size:px2rem(16);
        color: #333;
        border-bottom:px2rem(1) solid #eee;
        .text-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            .text {
                font-size: px2rem(14);
                font-weight: 700;
            }
            .tips {
                font-size:px2rem(12);
            }
        }
        span:first-child {
            font-size: px2rem(18);
            margin:0 px2rem(10)
        }
        span:last-child {
            font-size: px2rem(12);
            color: #333;
            margin:0 px2rem(10);
        }
    }
    .book-shelf-list-wrap {
        width:100%;
        height: calc(100vh - #{px2rem(90)});
        .book-shelf-list {
            display: flex;
            flex-flow:row wrap;
            width:100%;
            padding:px2rem(15);
            box-sizing: border-box;
            font-size:px2rem(14);
            .book-shelf-list-item {
                position: relative;
                width:33.3%;
                padding:px2rem(15);
                box-sizing: border-box;
                .img-wrap {
                    width:100%;
                    height: px2rem(113.333);
                    box-shadow: 0 0 px2rem(10) px2rem(0) rgba(200,200,200,.8);
                    img {
                        width:100%;
                        height: 100%;
                    }
                }
                .title {
                    color: #333;
                    margin-top:px2rem(10);
                }
                .selected-wrap {
                    position: absolute;
                    top:px2rem(20);
                    right:px2rem(20);
                    @include center;
                    width:px2rem(16);
                    height: px2rem(16);
                    font-size: px2rem(18);
                    border:px2rem(1) solid #ccc;
                    border-radius: 50%;
                    background-color: rgba($color: #eee, $alpha: 0.6);
                    overflow: hidden;
                    span {
                        opacity: 0;
                    }
                    &.selected {
                        border:px2rem(1) solid transparent;
                        background-color: #fff;
                        color:#ff9900;
                        span {
                            opacity: 1;
                        }
                    }
                }
            }
        }
        .book-shelf-list-none {
            height: 100%;
            @include center;
            flex-direction: column;
            font-size: px2rem(14);
            .text {
                color: #ccc;
            }
            .btn {
                height: px2rem(22);
                line-height: px2rem(22);
                background-color: #ff9900;
                padding:0 px2rem(20);
                border-radius: px2rem(11);
                color: #fff;
                margin-top: px2rem(10);
            }
        }
    }
}
</style>