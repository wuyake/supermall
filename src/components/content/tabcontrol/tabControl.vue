<template>
  <div class="control">
    <div v-for="(item,index) in titles" :key="item"  
              class="control-item"
              :class="{active: index=== currentIndex}"
              @click="click(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabComtrol',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex : 0
    }
  },
  methods:{
    click(index){
      this.currentIndex= index
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style>
.control{
  display: flex;
  height: 40px;
  line-height:40px;
  text-align: center;
  background-color: #fff;
}
.control-item{
  flex: 1;
}
.active{
  color: var(--color-high-text)
}
.control-item span{
  padding: 5px;
}
.active span{
  border-bottom: 2px solid var(--color-text);
}
</style>