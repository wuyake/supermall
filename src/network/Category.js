import {request} from './request.js'
export function category(){
    return request({
        url:'/category'
    })
}
export function getgory(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function detail(miniWallkey, type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey, 
            type
        }
    })
}