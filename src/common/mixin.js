import {debounce} from './until'
export const busGoods ={
    data(){
        return{
            busOff:null,
        }
    },
    mounted(){
        let refresh=debounce(this.$refs.scroll.refresh,200)
        this.busOff = ()=>{
            refresh()
        }
        this.$bus.$on("itemImgLoad",this.busOff)
        
    }
}