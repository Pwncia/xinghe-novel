<template>
    <div class="book-search">
        <div class="search-bar">
            <div class="back" @click="back">
                <span class="icon-back"></span>
            </div>
            <div class="search-wrap">
                <div class="search-icon">
                    <span class="icon-search"></span>
                </div>
                <input type="text" placeholder="书名、作者" v-model="searchWords">
                <div class="close-icon" v-show="isCloseShow" @click="searchWords = ''">
                    <span class="icon-close"></span>
                </div>
            </div>
            <div class="search-btn">搜索</div>
        </div>
        <div class="content">
            <div class="recommend">
                <div class="title">精选推荐</div>
                <div class="option-wrap">
                    <div class="option-item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchWords:'',
            isCloseShow:false
        }
    },
    methods:{
        back(){
            this.$emit('hide-book-search')
        },
        //获取搜索热词
        async getSearchHotWords() {
            const res = await this.$http.get('/api/book/search-hotwords')
            let arr = res.data.searchHotWords.filter(item => item.soaring !== 0)
            console.log(res, arr)
        }
    },
    watch:{
        searchWords(val) {
            if (val !== ''){
                this.isCloseShow = true
            }
            else {
                this.isCloseShow = false
            }
        }
    },
    mounted() {
        this.getSearchHotWords()
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.book-search {
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height: 100vh;
    background-color:#fff;
    .search-bar {
        display: flex;
        height: px2rem(48);
        align-items:center;
        .back {
            width:px2rem(32);
            font-size:px2rem(22);
            @include center;
        }
        .search-wrap {
            position: relative;
            display:flex;
            flex:1;
            background-color: #eaeaea;
            padding:0 px2rem(5);
            height:px2rem(32);
            border-radius:px2rem(20);
            // margin:0 px2rem(10) 0 px2rem(10);
            .search-icon {
                width:px2rem(36);
                font-size:px2rem(18);
                color:#aaa;
                @include center;
            }
            input {
                flex:1;
                outline: none;
                border:none;
                background-color: transparent;
            }
            .close-icon {
                position:absolute;
                top:50%;
                right:px2rem(8);
                transform:translate(0, -50%);
                font-size:px2rem(12);
                background-color: #bbb;
                width:px2rem(16);
                height: px2rem(16);
                border-radius:50%;
                color:#efefef;
                @include center;
            }
        }
        .search-btn {
            margin:0 px2rem(10);
            font-size:px2rem(14)
        }
    }
    .content {
        padding:0 px2rem(15);
        height:calc(100vh - #{px2rem(48)});
        background-color: pink;
    }
}
</style>