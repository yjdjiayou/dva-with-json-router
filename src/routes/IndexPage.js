import React from 'react';
import {connect} from 'dva';
import {Switch} from 'dva/router';
import NavBar from '../components/NavBar';
import {Layout} from 'antd';
import {renderAllRoutes, renderRoutes} from '../utils/routes';

const {Content} = Layout;

function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props}/>
      <Content>
        <Switch>
          {renderAllRoutes(props.routes, props.app)}
        </Switch>
      </Content>
    </Layout>
  );
}

export default connect()(IndexPage);
