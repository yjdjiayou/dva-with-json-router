/* import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import User from './routes/User';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Register from './routes/Register'; */
//配置式路由，集中式路由
export default [
    { path:'/',//路径 
      component:()=>import('./routes/IndexPage'),//此路径对应的组件
      routes:[//子路由
        {
            path:'/home',
            //webpack层面来说 ，如果发现有import 关键字，会把这个棋块单独打包成一个chunk,单独加载
            models:[()=>import('./models/home')],
            component:()=>import('./routes/Home'),
            redirect:true
        },
        {
            path:'/user',
            models:[()=>import('./models/user')],
            component:()=>import('./routes/User'),
        },
        {
            path:'/profile',
            component:()=>import('./routes/Profile')
        },
        {
            path:'/login',
            component:()=>import('./routes/Login')
        },
        {
            path:'/register',
            component:()=>import('./routes/Register')
        }
    ]
    }
]