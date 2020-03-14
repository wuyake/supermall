<template>
 <transition mode="out-in">
  <div>
    <form>
        <div class='form-group'>
            <label>用户名/邮箱/手机号</label>
            <input type='input' class='form-control'>
        </div>
        <div class='form-group'>
            <label>密码</label>
            <input type='password' class='form-control'>
        </div>
        <button class='btn btn-success'>登录</button>
        <button class='btn btn-danger' @click="go">取消</button>
    </form>
  </div>
  </transition>
</template>

<script>
export default {
    name:'Signin',
    methods:{
        go(){
            this.$router.push('/profile')
        }
    }

}
</script>

<style scoped>
button{
   margin-left: 72px;
}

</style>