<template>
  <div id='gorygoods'>
    <div class= 'gorygoods' v-for='item in list.list' :key="item.nextPage">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <span>{{item.title}}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'gorylist',
    props:{
        list:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style>
#gorygoods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.gorygoods{
    width: 88px;
    height: 103px;
}
img{
    width: 82%;
    height: 72%;
}
</style>