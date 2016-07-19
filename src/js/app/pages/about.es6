import React from 'react'
import Store from '../store/store.es6'

 
class About extends React.Component {
  state = {
    data: null
  }

  render() {
    return <div className="content about">
      <label>About Chao</label>
      <object src="../assets/pdf/Resume-Chao.Zhang.pdf">
        <embed src="../assets/pdf/Resume-Chao.Zhang.pdf"/>
      </object>
    </div>;
  }
}
 
export default About