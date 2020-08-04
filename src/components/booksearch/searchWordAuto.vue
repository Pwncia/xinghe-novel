<template>
    <div class="search-word-auto">
        <scroll>
            <div class="word-item" v-for="(item, index) in keywords" :key="index" @click="selectAutoWord(item)">
                <span class="icon-search"></span>
                <span>{{item}}</span>
            </div>
        </scroll>
    </div>
</template>

<script>
import scroll from '../scroll'
export default {
    props:['keywords'],
    methods:{
        selectAutoWord(word) {
            this.$emit('select-auto-word', word)
        }
    },
    components:{
        scroll
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.search-word-auto {
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:calc(100vw - #{px2rem(30)});
    background-color: #Fff;
    z-index: 200;
    padding:0 px2rem(15);
    font-size:px2rem(14);
    .word-item {
        display: flex;
        align-items:center;
        height:px2rem(38);
        border-bottom:px2rem(0.5) solid #eee;
        span:first-child {
            color:#bbb;
            margin-right: px2rem(10);
        }
        span:last-child {
            color:#333;
        }
    }
}
</style>