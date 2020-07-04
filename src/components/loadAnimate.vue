<template>
    <div class="load">
        <div class="ring">
            <span class="line"></span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
    }

}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
    .load {
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height: 100%;
        background-color: #fff;
        z-index: 100;
        .ring {
            position: absolute;
            top:px2rem(10);
            left:50%;
            transform: translate(-50%,0);
            width:px2rem(20);
            height:px2rem(20);
            border-radius: 50%;
            border:px2rem(3) solid #fff;
            box-sizing:border-box;
        }
        .line {
            display: block;
            width:100%;
            height:100%;
            border-radius:50%;
            border:px2rem(3) solid #ff9900;
            transform: translate(px2rem(-5),px2rem(-5));
            @include move(load);
            &::after {
                content: '';
                display: block;
                position: absolute;
                top:0;
                left: 0;
                width:100%;
                height: 100%;
                background-color: #fff;
                transform: skew(-30deg) translate(50%, -50%);
            }
        }
    }
</style>