<template>
 <transition mode="out-in">
  <div>
    <form>
        <div class='form-group'>
            <label>用户名</label>
            <input type='input' class='form-control'>
        </div>
        <div class='form-group'>
            <label>邮箱</label>
            <input type='email' class='form-control'>
        </div>
        <div class='form-group'>
            <label>密码</label>
            <input type='password' class='form-control'>
        </div>
        <button class='btn btn-primary'>注册</button>
        <button class='btn btn-warning'>重置</button>
        <button class='btn btn-danger' @click='go'>取消</button>
    </form>
  </div>
  </transition>
</template>

<script>
export default {
    name:'register',
    methods:{
        go(){
            this.$router.push('/profile')
        }
    }

}
</script>

<style>
button{
   margin-left: 49px;
}
</style>