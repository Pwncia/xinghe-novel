<template>
  <div class="scroll-wrap" ref="scroll" @scroll="handleScroll">
      <slot></slot>
  </div>
</template>

<script>
export default {
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
         @include scroll;
    }
</style>