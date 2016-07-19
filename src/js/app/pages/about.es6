import React from 'react'

const PATH_ASSET = "../assets/pdf/Resume-Chao.Zhang.pdf";


class About extends React.Component {

  render() {
    return <div className="content about">
      <label>About Chao</label>
      <object src={PATH_ASSET}>
        <embed src={PATH_ASSET}/>
      </object>
    </div>;
  }
}
 
export default About