export default{
    addGoods(context,payload){
        return new Promise((resolve,reject)=>{
            let goodsCart = context.state.goodsCart
            let oldgoods = null
            for(let item of goodsCart){
                if(item.iid === payload.iid){
                    oldgoods = item
                }
            }
            if(oldgoods){
                context.commit("oldiid",oldgoods)
                resolve('当前商品数量加一')
            }else{
                context.commit("addpush",payload)
                resolve('添加了新的商品')
            }
        
        })
    }
}