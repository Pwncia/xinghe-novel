<template>
    <transition name="slide-left">
    <div class="book-search">
        <div class="search-bar">
            <div class="back" @click="back">
                <span class="icon-back"></span>
            </div>
            <div class="search-wrap">
                <div class="search-icon">
                    <span class="icon-search"></span>
                </div>
                <input v-focus="focusStatus" type="text" placeholder="书名、作者" v-model="searchWords" @keyup.enter=handleSearch>
                <div class="close-icon" v-show="isCloseShow" @click="deleteSearchWord">
                    <span class="icon-close"></span>
                </div>
            </div>
            <div class="search-btn" @click="handleSearch">搜索</div>
        </div>
        <div class="content">
            <book-search-tab @search-relate="searchRelate"
            @clear-search-history="clearSearchHistory"
            :recomArr="recomArr"
            :searchMostArr="searchMostArr"
            :searchHistoryArr="searchHistoryArr"
            v-show="isLoaded"></book-search-tab>
            <div class="load-animate" v-show="!isLoaded || isSearching">
                <div class="animate-wrap">
                    <load-animate></load-animate>
                </div>
            </div>
            <word-auto v-show="autoCompWords.length !== 0" :keywords="autoCompWords" @select-auto-word="clickAutoWord"></word-auto>
            <book-search-res ref="bookSearchRes" v-show="isSearchResShow" :searchResList="searchResList"></book-search-res>
        </div>
    </div>
    </transition>
</template>

<script>
import {setSearchHistory, getSearchHistory, removeStorageItem} from '@/utils/localStorage.js'
import bookSearchTab from '@/components/booksearch/bookSearchTab'
import loadAnimate from '@/components/loadAnimate.vue'
import wordAuto from '@/components/booksearch/searchWordAuto'
import bookSearchRes from '@/components/booksearch/bookSearchRes.vue'
export default {
    data() {
        return {
            searchWords:'',
            isCloseShow:false,
            recomArr:'',
            searchMostArr:'',
            searchHistoryArr:'',
            focusStatus:false,
            isLoaded:false,
            autoCompWords:'',
            searchResList:'',
            //直接搜索，不自动补充
            flag:false,
            isSearching:false,
            isSearchResShow:false
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        //获取搜索热词
        async getSearchHotWords() {
            const res = await this.$http.get('/api/book/search-hotwords')
            if (res.status === 200) {
                this.searchMostArr = res.data.searchHotWords.slice(0, 10)
                this.recomArr = res.data.searchHotWords.slice(10, 20)
            }
            this.isLoaded = true
        },
        //模糊搜索
        async getFuzzySearch(word) {
            this.isSearching = true
            const res = await this.$http.get('/api/book/fuzzy-search', {
                params:{
                    query:word
                }
            })
            if (res.status === 200) {
                this.searchResList = res.data.books
            }
            console.log(res)
            this.isSearching = false
        },
        async getAutoComplete() {
            const res = await this.$http.get('/api/book/auto-complete', {
                params:{
                    query:this.searchWords
                }
            })
            if (res.status === 200) {
                this.autoCompWords = res.data.keywords
            }
            console.log(res)
        },
        //清空搜索框
        deleteSearchWord() {
            this.searchWords = ''
            this.flag = false
            this.isSearchResShow = false
            //重新获取搜索热词
            this.isLoaded = false
            this.getSearchHotWords()
            this.$refs.bookSearchRes.scrollRefresh()
        },
        //点击搜索
        handleSearch() {
            this.autoCompWords = ''
            if (!this.searchWords.trim()) {
                return false
            }
            setSearchHistory(this.searchWords)
            this.getHistorySearchWords()
            this.isSearchResShow = true
            this.getFuzzySearch(this.searchWords)
        },
        //获取搜索历史
        getHistorySearchWords(){
            this.searchHistoryArr = getSearchHistory()
        },
        //清空搜索历史
        clearSearchHistory() {
            removeStorageItem('search-history')
            this.searchHistoryArr = ''
        },
        searchRelate(word) {
            this.flag = true
            this.searchWords = word
            //缓存搜索历史
            setSearchHistory(word)
            //更新搜索历史
            this.getHistorySearchWords()
            this.getFuzzySearch(word)
            this.isSearchResShow = true
        },
        //点击自动补充的词
        clickAutoWord(word) {
            this.searchWords = word
            this.flag = true
            this.getFuzzySearch(word)
            this.isSearchResShow = true
        }
    },
    watch:{
        searchWords(val) {
            if (val !== ''){
                this.isCloseShow = true
            }
            else {
                this.isCloseShow = false
                this.autoCompWords = ' '
            }
            if (val.trim() !== '' && this.flag === false) {
                this.getAutoComplete()
            }
            else {
                this.autoCompWords = ''
            }
        }
    },
    components:{
        bookSearchTab,
        loadAnimate,
        wordAuto,
        bookSearchRes
    },
    mounted() {
        this.getSearchHotWords()
        this.getHistorySearchWords()
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
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
        position: relative;
        padding:0 px2rem(15);
        height:calc(100vh - #{px2rem(48)});
        // background-color: pink;
        .load-animate {
            position:absolute;
            top:0;
            left: 0;
            width:100%;
            height: 100%;
            .animate-wrap {
                width: 100%;
                height: px2rem(40);
            }
        }
    }
}
</style>