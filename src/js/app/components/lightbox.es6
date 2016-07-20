import React from 'react'

var _openLightBox = (imgSrc, index) => {
  React.render(<div id="modal">{imgSrc} index {index}</div>, document.getElementById("overlay"));
}


class ImagesGrid extends React.Component {

  render() {
  	let images = [];

    this.props.images.forEach((item, index) => {
      // create click callback
      let clickEvent = _openLightBox.bind(null, item.link, index)

  		images.push(
  			<li title={item.title} onClick={clickEvent}>
  				<img src={item.link}/>
  			</li>
  		);
  	})

    return <div className="images-grid">
      <ul>
      	{images}
      </ul>
    </div>;
  }

  _openLightBox(imgSrc, index) => {

  }
}
 
export default ImagesGrid