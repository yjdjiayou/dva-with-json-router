import React from 'react';
import styles from './index.less';
import {Link} from 'dva/router';
import logo from '../../assets/yay.jpg';
import {Menu, Layout} from 'antd';

let {Header} = Layout;
let {Item} = Menu;

const NavBar = (props) => {
  return (
    <Header className={styles.header}>
      <img src={logo}/>
      <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={[props.location.pathname]}>
        <Item key="/home"><Link to="/home">首页</Link></Item>
        <Item key="/user"><Link to="/user">用户管理</Link></Item>
        <Item key="/profile"><Link to="/profile">个人中心</Link></Item>
        <Item key="/register"><Link to="/register">注册</Link></Item>
        <Item key="/login"><Link to="/login">登录</Link></Item>
      </Menu>
    </Header>
  );
};
export default NavBar;
