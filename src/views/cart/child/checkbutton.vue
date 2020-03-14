<template>
  <div class="button" :class={active:check.checked}>
      <img src="~assets/img/gouxuan.png" alt="">
  </div>
</template>

<script>
export default {
    naem:'checkbutton',
    props:{
        check:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        console.log(this.check)
    }
}
</script>

<style>
.button{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #666;
}
.active{
    background-color: rgb(241, 104, 127);
    border-color:  rgb(241, 104, 127);
}
</style>