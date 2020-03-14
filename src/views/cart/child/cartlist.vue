<template>
  <div>
    <div v-for="(item, index) in cartList" :key="index">
        <cartlistitem :cartList= "item" />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartlistitem from './cartlistitem'
export default {
    name:'cartlist',
    components:{
        cartlistitem,
    },
    computed:{
        ...mapGetters(["cartList"])
    }
}
</script>

<style>

</style>