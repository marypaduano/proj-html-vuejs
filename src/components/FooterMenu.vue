<template>
    <div class="footer_menu">
      <h3>{{ title }}</h3>
      <ul class="menu">
        <li v-for="(link,i) in links" :key="i" class="menu-item">{{  link  }}</li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        title: {
          type: String,
          required: true
        },
        links: {
          type: Array,
          required: true
        }
      }
    }
  </script>

<style lang="scss" scoped>
.footer_menu {
  h3 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 24px;;
  }
  .menu-item {
    line-height: 25px;
    font-size: 15px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(207, 206, 206, 0.913);
  }
}
</style>