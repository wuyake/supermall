<template>
  <div id="fixs" @click=click>
      <div v-if="!isactive"><slot name="img"></slot></div>
      <div v-else><slot name='img-active'></slot></div>
      <div :style="activestyle"><slot name="font"></slot></div>
      
  </div>
</template>

<script>
export default {
    name:'tarbarlist',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#1E90FF'
        }
    },
    data(){
        return{
            show:false,
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle(){
            return this.isactive ? {color:this.activeColor}: {}
        }
    },
    methods:{
        click() {            
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
#fixs{
    flex: 1;
    text-align: center;
    height: 49px;
    
}
#fixs img{
    width: 24px;
    height: 24px;
}


</style>