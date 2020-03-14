<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'Bscroll',
    props:{
        probe:{
            type:Number,
            dafault:0
        },
        pullUpLoad:{
            type:Boolean,
            dafault:false
        }
    },
    data(){
        return{
            scroll:null,
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probe,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
            this.$emit("scroll",position)
        })
        this.scroll.on('pullingUp',()=>{
            console.log('aaa')
            this.$emit('updata')
        })
    },
    methods:{
        backupclick(x,y,time=300){
            this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style>

</style>