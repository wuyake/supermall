<template>
  <div id="home" class="home">
    <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabsettop1" v-show="tabtop"/>
    <bscroll class="content" ref="scroll" @scroll="scroll" :probe="3" :pullUpLoad="true" @updata="updata">
      <homeswiper :banners='banners' @swiperimg="swiperimg"></homeswiper>
      <recommend :recommend="recommend"/>
      <featrue/>
      <tab-control  :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabsettop2"/>
      <goodslist :goods="type" />
    </bscroll>
    <backup @click.native="backup" v-show="backupshow"/>
  </div>
</template>

<script>
import {gethome,gethomedata} from 'network/Home.js'
import {debounce} from 'common/until.js'
import {busGoods} from 'common/mixin'

import NavBar from 'components/common/navbar/NavBar.vue'
import tabControl from 'components/content/tabcontrol/tabControl.vue'
import Goodslist from 'components/content/Goods/Goodslist.vue'
import Bscroll from 'components/common/bscroll/Bscroll.vue'
import backup from 'components/content/backup/backup.vue'

import homeswiper from './child/homeswiper.vue'
import Recommend from './child/Recommend.vue'
import featrue from './child/featrue.vue'


export default {
    name:'Home',
    data(){
      return{
        banners:[],
        recommend:[],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType:'pop',
        backupshow:false,
        tabtop: false,
        tabofftop: 0,
        saveY:0,
      }
    },
    mixin:[busGoods],
    components:{
      NavBar,
      tabControl,
      Goodslist,
      Bscroll,
      backup,
      homeswiper,
      Recommend,
      featrue,
      
      
    },
    computed:{
      type(){
        return this.goods[this.currentType].list
      }
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.backupclick(0,this.saveY,0)
    },
    deactivated(){
      this.saveY=this.$refs.scroll.scroll.y
      this.$bus.$off("itemImgLoad",this.busOff)
    },
    created(){
      this.gethome(),
      this.gethomedata('pop')
      this.gethomedata('sell')
      this.gethomedata('new')
      
    },
    mounted(){
      
    },
    methods:{
      // 这是点击子传值父的方法
      tabclick(index){
        switch(index){
          case 0:
            this.currentType ='pop' 
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType ='sell'
            break
        }
        this.$refs.tabsettop2.currentIndex=index
        this.$refs.tabsettop1.currentIndex=index
      },
      scroll(position){
        this.backupshow = -position.y > 1000
        this.tabtop = -position.y > this.tabofftop
      },
      swiperimg(){
        this.tabofftop=this.$refs.tabsettop2.$el.offsetTop;
      },
      updata(){
        this.gethomedata(this.currentType)
        this.$refs.scroll.finishPullUp()
      },
      // 这是网络请求的方法
      gethome(){
        gethome().then(res=>{
          this.banners=res.data.banner.list
          this.recommend= res.data.recommend.list
        })
      },
      gethomedata(type){
        const page= this.goods[type].page +1
        gethomedata(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      },
      backup(){
        this.$refs.scroll.backupclick(0,0)
      }
    }
}
</script>

<style scoped>
#home{
 /* margin-top: 44px; */
 height: 100vh;
 position: relative;
}
.navbar{
  background-color: var(--color-tint);
}
.tabcontrol{
  position: relative;
  left: 0;
  right: 0;
  top: -2px;
  z-index: 9
}
.content{
  overflow: hidden;
  position: absolute;
  top: 47px;
  bottom:49px;
  left:0;
  right: 0;
}
</style>