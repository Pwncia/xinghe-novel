<template>
    <div class="set-bar" @click.stop="stopProgation">
        <div class="space-wrap">
            <div class="title">间距</div>
            <div class="options">
                <span v-for="(item,index) in spaceList" :key="index" :class="[item.icon,{currentSpace:item.value === options.space}]" @click="setFontSpace(item.value)"></span>
            </div>
        </div>
        <div class="fontsize-wrap">
            <div class="title">字号</div>
            <div class="options">
                <span class="icon-A3" @click="fontSizeDelarge"></span>
                <span class="icon-A2" @click="fontSizeEnlarge"></span>
            </div>
        </div>
        <div class="theme-wrap">
            <div class="title">主题</div>
            <div class="options">
                <span v-for="(item,index) in themeStyle" :key="index" :style="{backgroundColor:item.bg}" :class="{current:item.name === options.currentTheme.name}" @click="setTheme(item)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['options'],
    data() {
        return {
            themeStyle:[
                {   
                    name:'yellow',
                    bg:'rgb(245, 230, 206)',
                    color:'rgb(80, 66, 44)'
                },
                {
                    name:'green',
                    bg:'rgb(213, 239, 210)',
                    color:'rgb(30, 76, 43)'
                },
                {
                    name:'white',
                    bg:'rgb(244, 244, 244)',
                    color:'rgb(51, 51, 51)'
                },
                {
                    name:'blue',
                    bg:'rgb(205, 228, 253)',
                    color:'rgb(83, 103, 146)'
                },
                {
                    name:'pink',
                    bg:'rgb(224,182,196)'
                }
            ],
            spaceList:[
                {
                    value:3,
                    icon:'icon-space1'
                },
                {
                    value:2,
                    icon:'icon-space2'
                },
                {
                    value:1.5,
                    icon:'icon-space3'
                }
            ]
        }
    },
    methods:{
        fontSizeEnlarge(){
            this.$emit('fontsize-enlarge', 2)
        },
        fontSizeDelarge(){
            this.$emit('fontsize-delarge', 2)
        },
        stopProgation(){
            return false
        },
        setFontSpace(value) {
            this.$emit('set-fontspace', value)
        },
        setTheme(obj) {
            this.$emit('set-theme', obj)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global.scss';
.set-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position:absolute;
    bottom:0;
    left: 0;
    width:px2rem(355);
    height: px2rem(150);
    margin:px2rem(0) px2rem(10);
    box-sizing:border-box;
    background-color: #fff;
    border-radius: px2rem(10) px2rem(10) 0 0;
    font-size:px2rem(16);
    div[class$="wrap"]{
        display: flex;
        align-items: center;
        width:100%;
        .title {
            flex:0 0 px2rem(64);
            @include center;
        }
        .options {
            display: flex;
            flex:1;
            justify-content: space-evenly;
            align-items: center;
            padding-right:px2rem(16);
            span {
                font-size:px2rem(24)
            }
        }
        &.space-wrap {
            .options {
                span {
                    &.currentSpace {
                        color:#ff9900;
                    }
                }
            }
        }
        &.fontsize-wrap {
            .options {
                span {
                    flex:0 0 35%;
                    @include center;
                    background-color:#efefef;
                }
            }
        }
        &.theme-wrap {
            .options {
                span{
                    width:px2rem(20);
                    height: px2rem(20);
                     border:px2rem(1) solid #efefef;
                    border-radius: 50%;
                    &.current {
                        border:px2rem(1) solid #ff9900;
                    }
                }
            }
        }
    }
}
</style>