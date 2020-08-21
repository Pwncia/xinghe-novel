<template>
    <div class="progress-bar" @click.stop="stopProgation">
        <div class="chapter-wrap">
            <div class="pre" @click="changeOneChapter(0)">
                <span class="icon-back"></span>
            </div>
            <div class="chapter-info">
                <span>{{chapterInfo.title}}</span>
                <span>{{val}}%</span>
            </div>
            <div class="next" @click="changeOneChapter(1)">
                <span class="icon-forward"></span>
            </div>
        </div>
        <div class="progress-wrap">
            <input type="range" 
            :value="val" min="0" max="100" step="1" 
            ref="rangeInput"
            @change="onChange"
            @input="onInput">
            <span class="icon-backout" :class={disabled:isDisable} @click="backBeforeChange"></span>
        </div>
    </div>
</template>

<script>
export default {
    props:['progress', 'chapterInfo'],
    data(){
        return {
            val:'',
            isDisable:true,
            beforeChanged:''
        }
    },
    methods:{
        //上下章节切换
        changeOneChapter(type){
            this.beforeChanged = this.chapterInfo
            this.isDisable = false
            if (type === 0) {
                this.$emit('preOrNextChapter', this.chapterInfo.order - 1)
            }
            else {
                this.$emit('preOrNextChapter', this.chapterInfo.order + 1)
            }
        },
        //撤销章节切换
        backBeforeChange() {
            if (!this.isDisable) {
                this.$emit('backout', this.beforeChanged.order)
                //将撤销键设为不可撤销
                this.isDisable = true
                this.beforeChanged = ''
            }
        },
        onInput(e) {
            this.val = e.target.value
            this.initRangeInput()
        },
        onChange(e){
            this.val = e.target.value
            this.beforeChanged = this.chapterInfo
            this.isDisable = false
            this.$emit('onInputChange', this.val)
        },
        stopProgation(){
            return false
        },
        initRangeInput() {
            this.$refs.rangeInput.style.backgroundSize = `${this.val}% 100%`
        }
    },
    watch:{
        progress(newVal) {
            if (this.val !== newVal) {
                this.val = newVal
            }
        }
    },
    mounted(){
        this.initRangeInput()
    },
    updated(){
        this.initRangeInput()
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom:0;
    left:0;
    width:calc(100vw - #{px2rem(20)});
    height:px2rem(120);
    margin:0 px2rem(10);
    background-color: #fff;
    border-radius: px2rem(10) px2rem(10) 0 0;
    font-size: px2rem(16);
    padding:0 px2rem(30);
    box-sizing:border-box;
    .chapter-wrap {
        width:100%;
        display: flex;
        justify-content: space-between;
        .chapter-info {
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            span:first-child {
                font-size:px2rem(14)
            }
            span:last-child {
                font-size:px2rem(12);
            }
        }
    }
    .progress-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        input {
            width:100%;
            height: px2rem(3);
            border-radius: px2rem(1.5);
            -webkit-appearance: none;
            background:-webkit-linear-gradient(#ff9900,#ff9900) no-repeat, #ececec;
            background-size: 0% 100%;
            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: px2rem(14);
                width: px2rem(14);
                border-radius: 50%;
                background-color: #ff9900;
            }
            &:focus {
                outline: none;
            }
        }
        span {
            margin-left: px2rem(15);
            font-size: px2rem(20);
            &.disabled {
                color:#eee;
            }
        }
    }
}
</style>