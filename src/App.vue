<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ForumDescription from './components/ForumDescription.vue'

export default {
  components: {
    Header,
    Hero,
    ForumDescription
  }
}
</script>



<template>

  <Header />
  <Hero />
  <ForumDescription />
  
</template>

<style lang="scss">
@use './style/general.scss';
</style>
