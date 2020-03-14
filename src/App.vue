<template>
  <div id="app" >
    <keep-alive  exclude="Datil">
      <router-view>
      </router-view>
    </keep-alive>
    <Maintarbar/>
  </div>
</template>

<script>
 import Maintarbar from 'components/content/Maintarbar/Maintarbar.vue'
export default {
 
  name: 'App',
  components: {
    Maintarbar,
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>
