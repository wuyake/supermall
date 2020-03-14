<template> 
    <swiper>
        <swiper-item v-for="item in banners" :key="item.id">
            <a :href="item.link">
                <img :src="item.image" alt="" @load=swiper>
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import{Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    name:'homeswiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            isindex: true
        }
    },
    components:{
        Swiper,
        SwiperItem,
    },
    methods:{
        swiper(){
            if(this.isindex){
                this.$emit("swiperimg")
            }
            this.isindex=false
        }
    }
}
</script>

<style>

</style>