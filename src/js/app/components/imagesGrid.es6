import React from 'react'


class ImagesGrid extends React.Component {

  state = {
    lightboxShowing: false,
    lightboxSelected: null
  }

  render() {
  	var images = [],
    lightboxComp;

    this.props.images.forEach((item, index) => {
      // create click callback
      let clickEvent = this._openLightBox.bind(this, index)

  		images.push(
  			<li title={item.title} onClick={clickEvent}>
  				<img src={item.link}/>
  			</li>
  		);
  	})

    if(this.state.lightboxShowing) {
      // lightboxComp = <div>{this.}</div>;
    }

    return <div className="images-grid">
      <ul>
      	{images}
      </ul>
    </div>;
  }

  _openLightBox(index) {
    this.setState({
      lightboxShowing: true,
      lightboxSelected: index
    });
  }

  _closeLightBox() {
    this.setState({
      lightboxShowing: false,
      lightboxSelected: null
    });
  }
}
 
export default ImagesGrid