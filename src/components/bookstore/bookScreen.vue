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
                    <span class="tag" @click="selectType(item.title, item.name)" v-for="(item, index) in orderType" :key="index" :class="{actived:item.title === currentType }">{{item.title}}</span>
                </div>
            </div>
            <div class="minor-cate">
                <div class="title">分类标签</div>
                <div class="options-wrap">
                    <span class="tag" @click="selectMins('')" :class="{actived:mins === ''}">全部</span>
                    <span class="tag" @click="selectMins(item)" v-for="(item, index) in minorCateData" :key="index" :class="{actived:item === mins}">{{item}}</span>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="mask" @click="close"></div>
        </transition>
    </div>
</template>

<script>
export default {
    props:['type', 'minor', 'minorCateList', 'major'],
    data() {
        return {
            orderType:[
                {title:'热门', name:'hot'},
                {title:'新书', name:'new'},
                {title:'好评', name:'repulation'},
                {title:'完结', name:'over'},
                {title:'包月', name:'month'}
            ],
            mins:'',
            currentType:this.type,
            currentTypeName:''
        }
    },
    methods:{
        selectMins(item) {
            this.mins = item 
            this.queryBookList()
        },
        selectType(title, type) {
            this.currentType = title
            this.currentTypeName = type
            this.queryBookList()
        },
        close() {
            this.$emit('bookScreenhide')
        },
        queryBookList() {
            this.$emit('query-booklist', this.mins, this.currentTypeName, this.currentType)
        },
        refresh(){
            this.currentTypeName = ''
            this.mins = ''
            this.currentType = this.type
        }
    },
    computed:{
        minorCateData() {
            if (this.major) {
                const currentMajorObj = this.minorCateList.filter(item => item.major === this.major)
                if (currentMajorObj[0]){
                    return currentMajorObj[0].mins
                }
                return ''
            }
            else {
                return ''
            }
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
        height: 100%;
        z-index: 101;
        font-size:px2rem(8);
        color:#aaa;
        .content {
            background-color: #fff;
            padding:20px px2rem(15);
            .options-wrap {
                .tag {
                    float:left;
                    font-size: px2rem(10);
                    padding:px2rem(5) px2rem(20);
                    background-color: #ebe9e871;
                    margin:px2rem(5);
                    border-radius: px2rem(24);
                    color:#666;
                    text-align: center;
                    &.actived {
                        background-color: #fde0bf;
                        color:#ff9900;
                    }
                }
                overflow:hidden;
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
        .mask {
            flex:1;
            background-color:transparent;
        }
    }
</style>