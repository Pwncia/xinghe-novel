<template>
  <div class="scroll-wrap" :class="{'scroll-x':scrollDirection === 0,'scroll-y':scrollDirection === 1}" ref="scroll" @scroll="handleScroll">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:['scrollDirection'],
   methods:{
       scrollTo(x, y){
         this.$refs.scroll.scrollTo(x, y)
       },
       handleScroll(e){
         this.$emit('onScroll', e)
       }
   }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
    .scroll-wrap {
        height: 100%;
        width:100%;
        &.scroll-y {
           overflow-x:hidden;
           overflow-y:scroll; 
        }
        &.scroll-x {
            overflow-x:scroll;
            overflow-y:hidden;
        }
         @include scroll;
    }
</style>