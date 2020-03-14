<template>
  <div id= 'goodslist'>
      <Bscroll class='wrapper'>
        <ul >
            <li v-for='(item,index) in list' 
                :key="index" 
                @click='getindex(index)'
                :class="{classindex:currentIndex == index}"
                class='item'>{{item.title}}</li>
        </ul>
      </Bscroll>
  </div>
</template>

<script>

import Bscroll from 'components/common/bscroll/Bscroll'
export default {
    name:'catelist',
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Bscroll,
    },
    data(){
        return{
           currentIndex: 0
        }
    },
    methods:{
        getindex(index){
            this.currentIndex = index
            this.$emit('getindex',index)
        }
    }
}
</script>

<style scoped>
#goodslist{
  height: 100vh;
  text-align: center;
}
.wrapper {
   position: fixed;
  top: 49px;
  bottom: 50px;
  left: 0px;
  overflow: hidden;
}
.item{
    line-height:45px;
    font-size: 16px;
    width: 100px;
    height: 45px;
    background: #f6f6f6;
}
.classindex{
    background: #fff;
}
</style>