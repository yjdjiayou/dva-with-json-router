import React from 'react';
import {connect} from 'dva';
import {renderAllRoutes} from "../../utils/routes";
import {Switch} from 'dva/router';

function Home(props) {
  return (
    <div>
      Home {props.title}
      <Switch>
        {renderAllRoutes(props.routes, props.app)}
      </Switch>
    </div>
  );
}

export default connect(state => state.home)(Home);
