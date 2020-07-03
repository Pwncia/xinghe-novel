<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement
  const fontSize = window.innerWidth / 10 > 50 ? 50 : window.innerWidth / 10
  html.style.fontSize = fontSize + 'px'
})
export default {
  
}
</script>
<style lang="scss">
</style>
