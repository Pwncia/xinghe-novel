<template>
    <div class="book-nav">
        <div class="book-nav-item" :class="{current:$route.path === item.route}" v-for="(item,index) in navList" :key="index" @click="handleClick(item.route)">
            <span :class="[item.iconClass]"></span>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList:[
                {
                    iconClass:'icon-book-shelf',
                    title:'书架',
                    route:'/bookshelf'
                },
                {
                    iconClass:'icon-recom',
                    title:'精选',
                    route:'/bookrecom'
                },
                {
                    iconClass:'icon-book-store',
                    title:'书城',
                    route:'/bookstore'
                },
                {
                    iconClass:'icon-user',
                    title:'我的',
                    route:'/user'
                }
            ]
        }
    },
    methods: {
        handleClick(path) {
            if (this.$route.path === path) {
                return false
            }
            this.$router.push(path)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
.book-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items:center;
    width:100vw;
    height:px2rem(48);
    background-color: #fff;
    font-size:px2rem(12);
    color:#333;
    border-top:px2rem(1) solid #eee;
    z-index: 50;
    div {
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span:first-child {
            font-size:px2rem(18);
        }
        &.current {
            color:#ff9900;
        }
    }
}
</style>