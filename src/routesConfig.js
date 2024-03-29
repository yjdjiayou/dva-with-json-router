/* import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import User from './routes/User';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Register from './routes/Register'; */


// 这也是 umi 的核心原理，根据约定式的文件配置，生成对应的像下面这样格式的 json
// 配置式路由，集中式路由
export default [
  { path:'/',// 路径
    component:()=>import('./routes/IndexPage'),//此路径对应的组件
    routes:[// 子路由
      {
        path:'/home',
        // webpack 打包时 ，如果发现有 import 关键字，会把这个棋块单独打包成一个 chunk，单独加载
        models:[()=>import('./models/home')],
        component:()=>import('./routes/Home/Home'),
        routes:[
          {
            path:'/home/childOne',
            component:()=>import('./routes/Home/ChildOne'),
          },
          {
            path:'/home/childTwo',
            component:()=>import('./routes/Home/ChildTwo'),
            redirect:true,
          }
        ]
      },
      {
        path:'/user',
        redirect:true,
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
