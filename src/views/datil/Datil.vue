<template>
    <div id="datil">
        <datiltarbar @tarbartop="tarbartop" ref="tarbar"/>
        <Bscroll class="scroll" ref="scroll" @scroll="scroll" :probe="3">
            <datilswiper :simages="images" ref="swiper" />
            <datiltitle :goods="goods" />
            <datilshop :shop="shop"/>
            <datilgoods :detail-info="detailInfo" @refresh="refresh" />
            <datilparam :param-info="paramInfo" ref="param" />
            <datilcomment :comment-info="commentInfo" ref="comment"/>
            <goodslist :goods="recommend" ref="goodslist"/>
        </Bscroll>
        <backup v-show="backupshow" @click.native="backup" />
        <datilbottombar @addToCart="addCart" />
        <toast/>
    </div>

</template>

<script>
import datiltarbar from './datilchild/datiltarbar.vue'
import datilswiper from "./datilchild/datilswiper.vue"
import datiltitle from './datilchild/datiltitle.vue'
import datilshop from './datilchild/datilshop.vue'
import datilgoods from './datilchild/datilgoods.vue'
import datilparam  from './datilchild/datilparam.vue'
import datilcomment  from './datilchild/datilcomment.vue'
import datilbottombar  from './datilchild/datilbottombar.vue'

import {upimage,Goods,Shop,GoodsParam,getimage} from 'network/datil'

import Bscroll from 'components/common/bscroll/Bscroll'
import toast from 'components/common/toast/toast.vue'
import Goodslist from 'components/content/Goods/Goodslist.vue'
import backup from 'components/content/backup/backup.vue'
import {debounce} from 'common/until'
import {busGoods} from 'common/mixin'
export default {
    name:'Datil',
    components:{
        datiltarbar,
        datilswiper,
        datiltitle,
        datilshop,
        Bscroll,
        datilgoods,
        datilparam,
        datilcomment,
        Goodslist,
        backup,
        datilbottombar,
        toast
    },
    mixin:[busGoods],
    data(){
        return{
            iid:null,
            images:[],
            goods:{} ,
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommend:[],
            backupshow:false,
            settop:[],
            currentIndex: 0
        }
    },
    created(){
        this.iid=this.$route.params.iid
        upimage(this.iid).then(res=>{
            const data = res.result
            this.images= data.itemInfo.topImages
            console.log(res)
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop=new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo
            this.paramInfo = new GoodsParam (data.itemParams.info,data.itemParams.rule)
            this.commentInfo = data.rate.list[0]
            
        }),
        getimage().then(res=>{
            this.recommend = res.data.list
        }),
        this.getsettop = debounce(()=>{
            this.settop=[]
            this.settop.push(0)
            this.settop.push(this.$refs.param.$el.offsetTop)
            this.settop.push(this.$refs.comment.$el.offsetTop)
            this.settop.push(this.$refs.goodslist.$el.offsetTop)
            this.settop.push(Number.MAX_VALUE)
        },200)
            
    
        
    },
    mounted(){
    },
    destroyed(){
        this.$bus.$off("itemImgLoad",this.busOff)
    },
    methods:{
        refresh(){
            this.$refs.scroll.refresh()
            this.getsettop()
        },
        scroll(position){
            this.backupshow = -position.y > 1000 
            const length = this.settop.length
            const y = -position.y 
            for(let i =0; i<length-1;i++){
                // console.log(y>this.settop[i])
                if(this.currentIndex !==i && y>this.settop[i] && y<this.settop[i+1]){
                    this.currentIndex = i
                    this.$refs.tarbar.currentIndex = this.currentIndex
                }
            }
        },
        backup(){
            this.$refs.scroll.backupclick(0,0)
        },
        tarbartop(index){
            console.log(index)
            this.$refs.scroll.backupclick(0,-this.settop[index],200)
        },
        addCart(){
            const shopCart = {}
            shopCart.image = this.images[0]
            shopCart.title = this.goods.title
            shopCart.desc = this.detailInfo.desc
            shopCart.price = this.goods.lowNowPrice
            shopCart.iid = this.iid
            this.$store.dispatch("addGoods",shopCart).then(res=>{
                this.$toast.isshow(res,1500)
            })
        }
    }
}
</script>

<style>
#datil{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.scroll{
    overflow: hidden;
    /* height: calculate(100% - 48px); */
   
    position: absolute;
    top: 47px;
    bottom:0;
    left:0;
    right: 0;
    
}
</style>