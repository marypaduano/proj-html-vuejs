<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'

export default {
  components: {
    Header,
    Hero
  }
}
</script>



<template>

  <Header />
  <Hero />
  
</template>

<style lang="scss">
@use './style/general.scss';
</style>
