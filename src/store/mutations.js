export default{
    addpush(state,payload){
        payload.count =1
        payload.checked = true
        state.goodsCart.push(payload)
    },
    oldiid(state,payload){
        payload.count ++
    }
}