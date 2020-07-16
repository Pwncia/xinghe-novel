<template>
    <div class="search-tab">
        <div class="recommend">
                <div class="title">精选推荐</div>
                <div class="option-wrap">
                    <span class="option-item" @click="searchRelate(item.word)" v-for="(item, index) in recomArr" :key="index">{{item.word}}</span>
                </div>
            </div>
            <div class="search-list-most">
                <div class="title">大家都在搜</div>
                <div class="list-wrap">
                    <div class="list-item" v-for="(item, index) in searchMostArr" :key="index" @click="searchRelate(item.word)">
                        <span>{{index+1}}</span>
                        <span>{{item.word}}</span>
                    </div>
                </div>
            </div>
            <div class="search-history">
                <div class="title">搜索历史</div>
                <div class="clear" @click="clearSearchHistory">
                    <span class="icon-bin"></span>
                    <span>清空</span>
                </div>
                <div class="history-wrap">
                    <span class="history-item" v-for="(item,index) in searchHistoryArr" :key="index" @click="searchRelate(item)">{{item}}</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['recomArr', 'searchMostArr', 'searchHistoryArr'],
    methods:{
        searchRelate(word) {
            this.$emit('search-relate', word)
        },
        clearSearchHistory(){
            this.$emit('clear-search-history')
        }
    }
}
</script>

<style lang='scss'>
@import '../../assets/styles/global.scss';
    .title {
                margin:px2rem(15) 0;
                font-size: px2rem(14);
                font-weight:700;
            }
        .recommend {
            overflow: hidden;
            .option-wrap {
                font-size:px2rem(12);
                .option-item {
                    float:left;
                    border-radius: px2rem(28);
                    padding:px2rem(8) px2rem(15);
                    margin:0 15px 10px 0;
                    &:nth-child(n) {
                        background-color: #f6ba9c;
                        color:#e65a17;
                    }
                    &:nth-child(2n+1) {
                        background-color: #dc8cdb;
                        color:#8a1196;
                    }
                    &:nth-child(3n+2) {
                        background-color: #beee97;
                        color:#68cc14;
                    }
                }
            }
        }
        .search-list-most {
            .list-wrap {
                display: grid;
                font-size:px2rem(12);
                grid-template-columns:50% 50%;
                .list-item {
                    display: flex;
                    margin-bottom: px2rem(10);
                    color:#333;
                    span:first-child {
                        @include center;
                        width:px2rem(16);
                        height: px2rem(16);
                        border-radius: px2rem(3);
                        margin-right:px2rem(10);
                        background-color: #aaa;
                        color:#fff;
                    }
                    span:last-child {
                        display:flex;
                        align-items:center;
                        height: px2rem(16);
                    }
                    &:first-child {
                        span:first-child {
                            background-color: #e64217;
                        }
                    }
                    &:nth-child(2) {
                        span:first-child {
                            background-color: #e66f17;
                        }
                    }
                    &:nth-child(3) {
                        span:first-child {
                            background-color: #e68f17;
                        }
                    }
                }
            }
        }
        .search-history {
            position: relative;
            .clear {
                position:absolute;
                top:0;
                right:0;
                font-size:px2rem(10);
                color:#ccc;
                span:first-child {
                    margin-right:px2rem(4)
                }
            }
            .history-wrap {
                overflow: hidden;
                font-size:px2rem(12);
                span {
                    float:left;
                    padding:px2rem(8) px2rem(15);
                    background-color: #eaeaea;
                    color:#aaa;
                    border-radius: px2rem(14);
                    margin: 0 px2rem(15) px2rem(10) 0;
                }
            }
        }
</style>