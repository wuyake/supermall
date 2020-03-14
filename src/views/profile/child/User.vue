<template>
  <div class='user'>
      <div class='img'><img src="~assets/img/wode.png" alt=""></div>
      <div class='login'>
        <div>登录/注册</div><div><img src="~assets/img/shouji.png" alt="">暂无绑定手机号</div>
      </div>
      <div class='youbian'><img src="~assets/img/youbian.png" alt=""></div>
  </div>
</template>

<script>
export default {
    name:'User',
    deta(){
      return {

      }
    },
    components:{
     
    }
}
</script>

<style>
.user{
  display: flex;
  height:80px;
  background-color: var(--color-tint)
}
.img{
  text-align: center;
  line-height:50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  width: 50px;
  height: 50px;
  margin-top: 14px;
  margin-left: 18px;
}
.img img{
  width: 40px;
  height: 40px;
}
.youbian{
  text-align: center;
  width: 100px;
}
.youbian img{
  margin-top: 23px;
  margin-right: -40px;
}
.login{
  flex: 1;
  padding-left: 28px;
}
.login div:nth-child(1){
  height: 50px;
  line-height:50px;
  font-size:16px;
}
.login div:nth-child(2){
  font-size:13px;
  line-height:1px;
}
.login div:nth-child(2) img{
  margin-bottom:-4px;
}
</style>