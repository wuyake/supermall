<template>
   <tarbar>
      <tarbarlist path='/home' >
        <img src="~assets/img/shouye.png" alt="" slot="img">
        <img src="~assets/img/shouye1.png" alt="" slot="img-active">
        <div slot="font">首页</div>
      </tarbarlist>
      <tarbarlist path="/category" >
        <img src="~assets/img/fen_lei.png" alt="" slot="img">
        <img src="~assets/img/fen_lei1.png" alt="" slot="img-active">
        <div slot="font">分类</div>
      </tarbarlist>
      <tarbarlist path='/cart' >
        <img src="~assets/img/gouwuche.png" alt="" slot="img">
        <img src="~assets/img/gouwuche1.png" alt="" slot="img-active">
        <div slot="font">购物车</div>
      </tarbarlist>
      <tarbarlist path='/profile' >
        <img src="~assets/img/wode.png" alt="" slot="img">
        <img src="~assets/img/wode1.png" alt="" slot="img-active">
        <div slot="font">我的</div>
      </tarbarlist>
    </tarbar>
</template>

<script>
import tarbar from 'components/common/tarbar/tarbar.vue'
import tarbarlist from 'components/common/tarbar/tarbarlist'
export default {
    name:'Maintarbar',
    components:{
        tarbar,
        tarbarlist
    }
}
</script>

<style>

</style>