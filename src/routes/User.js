import React from 'react';
import { connect } from 'dva';

function User(props) {
  return (
   <div>
     User{props.title}
   </div>
  );
}

export default connect(state=>state.user)(User);
