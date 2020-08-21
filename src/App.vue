<template>
  <div id="app">
    <router-view/>
    <book-nav></book-nav>
  </div>
</template>

<script>
import bookNav from './components/bookNav.vue'
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement
  const fontSize = window.innerWidth / 10 > 50 ? 50 : window.innerWidth / 10
  html.style.fontSize = fontSize + 'px'
})
export default {
    components:{
      bookNav
    }
}
</script>
<style lang="scss">

</style>
