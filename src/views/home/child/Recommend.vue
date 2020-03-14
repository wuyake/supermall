<template>
  <div class='nav'>
      <div v-for="item in recommend" :key="item.id" class="navwidth">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'Recommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.nav{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee
}
.navwidth{
    flex: 1;
}
.navwidth img{
    width: 75px;
    height: 75px;
    margin-bottom: 10px
}
</style>