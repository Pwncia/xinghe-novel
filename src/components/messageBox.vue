<template>
    <div class="message-box">
        <transition name="scale">
            <div class="message"  v-show="isMessageBoxShow">
                {{msg}}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props:['msg'],
    data() {
        return {
            isMessageBoxShow:false
        }
    },
    methods:{
        show(){
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.isMessageBoxShow = true
             this.timer = setTimeout(() => {
                this.isMessageBoxShow = false
            }, 2000)
        },
        hidden() {
            this.isMessageBoxShow = false
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global.scss';
.message-box {
    position: fixed;
    top:70%;
    left:50%;
    transform: translateX(-50%);
    z-index: 106;
    .message {
        background-color:rgba(0,0,0,.8);
        padding: px2rem(15);
        font-size:px2rem(14);
        color:#fff;
    }
}
</style>