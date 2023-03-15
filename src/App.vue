<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ForumDescription from './components/ForumDescription.vue'
import Main from './components/Main.vue'

export default {
  components: {
    Header,
    Hero,
    ForumDescription,
    Main
  }
}
</script>



<template>

  <Header />
  <Hero />
  <ForumDescription />
  <Main />
  
</template>

<style lang="scss">
@use './style/general.scss';
</style>
