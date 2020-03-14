<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{currentCart}})</div>
    </nav-bar>
    <bscroll class="wrapper" ref="scroll">
        <cartlist/>
    </bscroll>
    <BottomBar/>
    <toast/>
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Bscroll from 'components/common/bscroll/Bscroll.vue'
import {mapGetters} from 'vuex'
import cartlist from './child/cartlist.vue'
import BottomBar from './child/BottomBar.vue'
import toast from 'components/common/toast/toast.vue'
export default {
    name:'Cart',
    components:{
      NavBar,
      Bscroll,
      cartlist,
      BottomBar,
      toast
    },
    computed:{
      ...mapGetters([
        'currentCart'
      ])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
}
</script>

<style>
#cart{
  height: 100vh;
  
}
.navbar{
  background-color: var(--color-tint);
}
.wrapper{
  height: calc(100% - 48px - 49px);
  /* position: absolute;
  top: 47px;
  bottom: 49px;
  left: 0;
  right: 0; */
  overflow: hidden;
}
</style>