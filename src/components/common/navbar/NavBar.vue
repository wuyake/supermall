<template>
  <div class='navbar'>
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>
.navbar{
   display: flex;
   height: 48px;
   line-height: 48px ;
   /* box-shadow: 0 1px 1px rbg(100,100,100,.1) */
}
.left, .right{
    width: 60px;
}
.center{
    flex: 1;
    text-align: center
}
</style>