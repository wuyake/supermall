<template>
  <div id='Category'>
    <nav-bar  class='tarbar'><div slot='center'>商品分类</div></nav-bar>
    <div class='jcontent'>
    <catelist :list='list' @getindex="getindex" class="catelist"/>
      <Bscroll class='wrapper'>
        
          
          <gorylist :list= 'gorylist' class="gorylist"></gorylist>
      
        <!-- <div class='titlecontent'>
          <div class="title" v-for="item in ['流行','新款','精选']" :key="item">{{item}}</div>
        </div> -->
        <catedetil :detil = 'detil'/>
      </Bscroll>
    </div>
  </div>
  
</template>

<script>
import Bscroll from 'components/common/bscroll/Bscroll'
import NavBar from 'components/common/navbar/NavBar.vue'

import {category,getgory,detail} from 'network/Category'
import catelist from './child/catelist.vue'
import catedetil from './child/catedetil.vue'
import gorylist  from './child/gorylist.vue'
export default {
    name:'Category',
    data(){
      return{
        list:[],
        detil:[],
        index:0,
        maitKey:3627,
        gorylist:{}
      }
    },
    components:{
      NavBar,
      Bscroll,
      catelist,
      catedetil,
      gorylist,
    },
    created(){
      
      this.getindex()
      
        
      
      
      detail(10062603, 'pop').then(res=>{
        this.detil = res
        console.log(res instanceof Array)
        console.log(res)
      })
    },
    methods:{
      getindex(index=0){
        this.index = index
        category().then(res=>{
          this.list= res.data.category.list
          console.log(this.index)
          this.maitKey= this.list[this.index].maitKey
          console.log(this.maitKey)
          this.getgory()
        })
      },
      getgory(){ 
        console.log(this.maitKey)
        getgory(this.maitKey).then(res=>{
          console.log(res)
          this.gorylist = res.data
        })
      }
    }
}
</script>

<style>
.tarbar{
  background-color: var(--color-tint);
}
#Category{
  height: 100vh;
  text-align: center;
}
.wrapper {
  /* height: calc(100% - 48px - 49px); */
  /* height: 100%; */
   position: fixed;
  top: 49px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
  flex: 1;
}
.jcontent{
    display: flex;
}
.catelist{
  width: 100px;
}
.gorylist{
  
}
</style>