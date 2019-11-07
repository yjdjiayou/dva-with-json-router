import React from 'react';
import { connect } from 'dva';

function ChildOne(props) {
  return (
    <div>
      ChildOne
    </div>
  );
}

export default connect()(ChildOne);
