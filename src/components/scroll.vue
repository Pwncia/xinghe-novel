<template>
  <div class="scroll-wrap" ref="scroll">
      <slot></slot>
  </div>
</template>

<script>
export default {
   methods:{
       scrollTo(x, y){
         this.$refs.scroll.scrollTo(x, y)
       }
   }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';
    .scroll-wrap {
        position: relative;
        height: 100%;
         width:100%;
         z-index: 100;
         @include scroll;
    }
</style>