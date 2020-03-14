<template>
  <div>
 
  </div>
</template>

<script>
import goods from 'components/content/Goods/Goodslist.vue'
export default {
    name:'catedetil',
    props:{
        detil:{
            type:Array,
            default(){
              return []
            }
        }
    },
    components:{
      goods,
    }
}
</script>

<style>

</style>