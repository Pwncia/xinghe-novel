<template>
    <div class="menu-bar" @click.stop="stopProgation">
        <div class="catelogue" @click="tapMenuBar(0)">
            <span class="icon-menu"></span>
            <span>目录</span>
        </div>
        <div class="progress">
            <span class="icon-progress" @click="tapMenuBar(1)"></span>
            <span>进度</span>
        </div>
        <div class="font-set">
            <span class="icon-A" @click="tapMenuBar(2)"></span>
            <span>设置</span>
        </div>
        <div class="night-mode" @click="tapMenuBar(3)">
            <span :class="[options.isNight ? 'icon-daytime' : 'icon-night']"></span>
            <span>{{options.isNight?'日间':'夜间'}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['options'],
    data() {
        return {
            isNight:false
        }
    },
    methods:{
        stopProgation() {
            return false
        },
        tapMenuBar(id){
            this.$emit('tap-menubar', id)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.menu-bar {
    position: absolute;
    bottom:0;
    left: 0;
    width:100%;
    height: px2rem(52);
    background-color: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: px2rem(14);
    div {
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        span:first-child {
            font-size:px2rem(18);
        }
    }
}
</style>