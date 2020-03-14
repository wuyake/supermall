<template>
  <div>
    <navbar class="navbar"><div slot="center">我的</div></navbar>
    <user @click.native="login"></user>
    <price></price>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'

import User from './child/User.vue'
import price from './child/price.vue'
export default {
    name:'Profile',
    deta(){
      return {

      }
    },
    components:{
      navbar,
      User,
      price,
    },
    methods:{
      login(){
        console.log('---')
        this.$router.push('/login')
      }
    },
}
</script>

<style scoped>
.navbar{
  background-color:var(--color-tint);
}
</style>