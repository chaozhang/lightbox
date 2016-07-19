import React from 'react'
import Store from '../store/store.es6'

 
class About extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.context = context;      
  }

  state = {
    data: null
  }

  render() {
    return <div className="content about">
      <label>About</label>
    </div>;
  }
}

About.contextTypes = {
  router: React.PropTypes.object.isRequired
};
 
export default About