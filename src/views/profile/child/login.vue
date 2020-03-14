<template>
  <div>
      <router-link to='/login/Signin' tag='span'>登录</router-link>
      <router-link to='/login/Register' tag='span'>注册</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'login',

}
</script>

<style scoped>
.v-enter,
        .v-leave-to{
            opacity: 0;
            transform: translateY(150px);
        }
        .v-enter-active,
        .v-leave-active{
            transition: all .5s ease;
        }
span{
  margin: 72px;
  font-size:20px;
}

</style>