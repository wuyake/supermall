<template>
  <div class="toast" v-show="show">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'toast',
    data(){
        return {
            message:'',
            show:false
        }
    },
    methods:{
        isshow(res,direction=2000){
            this.message = res
            this.show = true
            setTimeout(() => {
                this.show = false
                this.message = ''
            },direction)
        }
    }
}
</script>

<style>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding:8px 10px;
    color: #fff;
    z-index: 999; 
    background-color: rgb(0,0,0,.75);
}
</style>