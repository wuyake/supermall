<template>
  <div>
      <div class='price'>
      <div class="flex">
          <div><span>200.00</span>元</div>
          <div>我的余额</div>
      </div>
      <div class="flex">
          <div><span>0</span>个</div>
          <div>我的优惠</div>
      </div>
      <div class="flex">
          <div><span>587.32</span>分</div>
          <div>我的积分</div>
      </div>
  </div>
  <div class='detil'><img src='~assets/img/youjian.png' alt=""/><span>我的消息</span></div>
  <div class='detil' ><img src='~assets/img/jifen.png' alt=""/>积分商城</div>
  <div class='detil'><img src='~assets/img/tmall.png' alt=""/><span>下载购物app</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.price{
    display: flex;
    font-size:14px;
    border-bottom: 12px solid #eee;
}
.flex{
    flex: 1;
    text-align: center;
    height: 85px;
    border: 0.5px solid rgba(0,0,0,.1)
}
.flex div:nth-child(1) span{
    margin-top: 20px;
    font-size:24px;
    color: var(--color-high-text)
}
.flex div:nth-child(1){
    margin-top: 9px;
    margin-bottom: 5px;
}
.detil{
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border-bottom: 1px solid rgba(0,0,0, .1);
}
.detil img{
    margin-right:5px;
    vertical-align:middle;
    width:21px;
    height:21px;
}
</style>