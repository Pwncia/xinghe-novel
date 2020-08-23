<template>
    <div class="sub-cate">
        <div class="cate-item" v-for="(item,index) in cateList"
        :key="index"
        @click="handle(item.name)"
        >
            <div class="cover">
                <img v-lazy="getCoverPath(item)" alt="">
            </div>
            <div class="info-wrap">
                <span class="title">{{item.name}}</span>
                <span class="count">{{item.bookCount}}册</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['cateList'],
    methods:{
        getCoverPath(item){
            let coverPath = item.bookCover[0]
            coverPath = coverPath.substr(7)
            return this.urlDecode(coverPath)
        },
        handle(major){
            this.$emit('cateBookListShow', major)
        }
    },
    mounted(){
    }
}
</script>

<style lang='scss' scoped>
    @import '../../assets/styles/global.scss';
    .sub-cate {
        width:100%;
        height:100%;
        .cate-item {
            width:50%;
            height:px2rem(80);
            float:left;
            display: flex;
            align-items: center;
            .cover{
                width:px2rem(40);
                img {
                    width:100%;
                }
            }
            .info-wrap {
                font-size: px2rem(14);
                color:#000;
                display: flex;
                flex-direction: column;
                margin-left: px2rem(10);
                span:last-child {
                    font-size:px2rem(12);
                    color:#ccc;
                    margin-top:px2rem(5)
                }
            }
        }
    }
</style>