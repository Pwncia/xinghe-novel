<template>
    <div class="title-bar">
        <span class="icon-back" @click.stop="goBack"></span>
        <span class="icon-more"></span>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            if (window.history.length <= 1) {
                this.$router.push('/bookstore')
            }
            else {
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global.scss';
.title-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top:0;
    left: 0;
    height: px2rem(45);
    width:100%;
    font-size:px2rem(24);
    span:first-child {
        margin-left: px2rem(10);
    }
    span:last-child {
        margin-right:px2rem(5)
    }
}
</style>