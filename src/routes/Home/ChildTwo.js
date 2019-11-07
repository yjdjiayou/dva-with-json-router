import React from 'react';
import { connect } from 'dva';

function ChildTwo(props) {
  return (
    <div>
      ChildTwo
    </div>
  );
}

export default connect()(ChildTwo);
