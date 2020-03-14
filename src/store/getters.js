export default{
    currentCart(state){
        return state.goodsCart.length
    },
    cartList(state){
        return state.goodsCart
    }
}