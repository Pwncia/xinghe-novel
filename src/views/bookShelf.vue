<template>
    <div class="book-shelf">
        <div class="book-shelf-title">
            <span class="icon-back"></span>
            <div class="text-wrap">
                <span class="text">书架</span>
            </div>
            <span class="icon-search"></span>
        </div>
    </div>
</template>

<script>
export default {

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
            .text {
                font-weight: 700;
            }
        }
        span:nth-child(n+1) {
            font-size: px2rem(20);
            margin:0 px2rem(10)
        }
    }
}
</style>