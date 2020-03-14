import VueRouter from 'vue-router'
import vue from 'vue'
const Home =()=>import ('views/home/Home.vue')
const Cart =()=>import('views/cart/Cart.vue')
const Category =()=>import ('views/category/Category.vue')
const Profile =()=>import ('views/profile/Profile.vue')
const Datil =()=>import ('views/datil/Datil.vue')
const Login = ()=>import ('views/profile/child/login.vue')
const Signin = ()=>import ('views/profile/child/Signin.vue')
const Register = ()=>import ('views/profile/child/register.vue')
vue.use(VueRouter);
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/category',
        component:Category
    },
    {
        path: '/cart',
        component:Cart
    },
    {
        path: '/profile',
        component:Profile,
    },
    {
        path: '/datil/:iid',
        component:Datil,
    },
    {
        path:'/login',
        component:Login,
        children:[
            {
                path:'',
                component:Signin
            },
            {
                path:'Signin',
                component:Signin
            },
            {
                path:'register',
                component:Register
            }
        ]
    }
    
]
const router=new VueRouter({
    routes,
    mode:'history'
})
export default router