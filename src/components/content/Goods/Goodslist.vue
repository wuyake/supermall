<template>
  <div class='goodslist'>
      <goodslistitem v-for="item in goods" :key="item.id" :goods="item" />
  </div>
</template>

<script>
import Goodslistitem from './Goodslistitem'
export default {
    name:'Goodslist',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Goodslistitem
    }
}
</script>

<style>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
}
</style>