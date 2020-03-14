<template>
  <nav-bar>
      <div slot="left" class="datilimg" @click="backhome">
          <img src="~assets/img/datailback.png" alt="" >
      </div>
      <div slot="center" class="title">
          <div v-for= "(item, index) in tabs" :key='index' class="datiltar" :class="{fontcolor:index === currentIndex}" @click="tarbartop(index)">{{item}}</div>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name:'datiltarbar',
    data(){
        return {
            tabs:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    components:{
        NavBar,
    },
    methods:{
        tarbartop(index){
            this.currentIndex =index
            this.$emit("tarbartop",index)
        },
        backhome(){
            this.$router.back()
        },
    
    }
}
</script>

<style>
.fontcolor{
    color:var(--color-high-text)
}
.datilimg{
    height: 32px;
    width: 32px;
    margin-top: 7px;
    margin-left: 17px;
}
.title{
    display: flex;
}
.datiltar{
    flex: 1;
}
</style>