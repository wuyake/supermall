<template>
<div class="bottom-menu">
    <checkbutton class="select-all" :class="{bgc:isSelectAll}" @click.native="allclick"></checkbutton>
    <span class="all">全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="toast">去计算({{$store.getters.currentCart}})</span>
  </div>
</template>

<script>
  import checkbutton from './checkbutton'
	export default {
		name: "BottomBar",
    components: {
		  checkbutton
    },
    computed: {
		  totalPrice() {
        let money = 0
        for(let i=0;i<this.$store.state.goodsCart.length;i++){
          let item =this.$store.state.goodsCart[i]
          if(item.checked){
            money +=item.price*item.count
          }        
        }
        return money
      },
      isSelectAll(){
        if(!this.$store.state.goodsCart.length == 0){
          for(let item of this.$store.state.goodsCart){
            if(item.checked == false){
              return false
            }
          }
          return true
        }
      }
    },
    methods: {
      allclick(){
        if(this.isSelectAll){
          this.$store.state.goodsCart.forEach(item=>item.checked = false)
        }else{
          this.$store.state.goodsCart.forEach(item=>item.checked=true)
        }
      },
      toast(){
        if( !this.isSelectAll){
          console.log(this.$toast)
          this.$toast.isshow('请添加新的商品',1500)
        }  
      }
      // checkBtnClick: function () {
      //   // 1.判断是否有未选中的按钮
      //   let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);
      //   // 2.有未选中的内容, 则全部选中
      //   if (isSelectAll) {
      //     this.$store.state.cartList.forEach(item => {
      //       item.checked = true;
      //     });
      //   } else {
      //     this.$store.state.cartList.forEach(item => {
      //       item.checked = false;
      //     });
      //   }
      // }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }
  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 17px;
    top: 7px;
    height: 26px;
    width: 26px;
  }
  .all{
    margin-left: 15px;
    font-size: 16px;
  }
  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
  .bgc{
    background-color: rgb(241, 104, 127);
    border-color:  rgb(241, 104, 127);
}
</style>