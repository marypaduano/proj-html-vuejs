<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ForumDescription from './components/ForumDescription.vue'
import Main from './components/Main.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    Header,
    Hero,
    ForumDescription,
    Main,
    AppFooter,
  }
}
</script>



<template>

  <Header />
  <Hero />
  <ForumDescription />
  <Main />
  <AppFooter />
 
  
</template>

<style lang="scss">
@use './style/general.scss';
</style>
