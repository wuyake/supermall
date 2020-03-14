<template>
  <swiper class="swiper-height">
      <swiper-item v-for="item in simages" :key="item">
          <img :src="item" alt="">
          <div>{{}}</div>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'datilswiper',
    props:{
        simages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem,
    },
    
    methods:{

    }
}
</script>

<style>
.swiper-height{
    height: 275px;
}
</style>