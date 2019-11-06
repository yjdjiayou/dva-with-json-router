import React from 'react';
import { connect } from 'dva';
import { Redirect,Switch } from 'dva/router';
import NavBar from '../components/NavBar';
import {Button,Layout} from 'antd';
import {renderAllRoutes,renderRoutes} from '../utils/routes';
const { Header, Footer, Sider, Content } = Layout;
function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props}/>
      <Content>
          <Switch>
            {renderRoutes(props.routes,props.app)}
          </Switch>
      </Content>
    </Layout>
  );
}

export default connect()(IndexPage);
