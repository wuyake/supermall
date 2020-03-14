<template>
  <div class='list-item' @click="datil">
      <img :src="img" alt="" @load="upload">
      <div>
          <p>{{goods.title}}</p>
          <span class="price">{{goods.price}}</span>
          <span class="cfav">{{goods.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Goodslistitem',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        img(){
            return this.goods.image || this.goods.show.img
        }
    },
    methods:{
        upload(){
            this.$bus.$emit("itemImgLoad")
        },
        datil(){
            this.$router.push("/datil/" +this.goods.iid)
        }
    }
}
</script>

<style>
.list-item{
    width: 48%;
    text-align: center;
}
.list-item p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.list-item img{
    width: 100%;
}
.price{
    margin-left:-10px;
}
.cfav::before{
    content:"";
    display: inline-block; 
    margin-left: 8px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/shoucang.png")
}
</style>