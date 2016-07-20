import React from 'react'
import Lightbox from './lightbox.es6'


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
      let clickEvent = this._openLightbox.bind(this, index)

      images.push(
        <li title={item.title} onClick={clickEvent}>
          <img src={item.link}/>
        </li>
      );
    })

    if(this.state.lightboxShowing) {
      lightboxComp = <Lightbox
        selectedIndex={this.state.lightboxSelected}
        images={this.props.images}
        onClose={this._closeLightbox.bind(this)}
      />;
    }

    return <div className="images-grid">
      <ul>
        {images}
      </ul>
      {lightboxComp}
    </div>;
  }

  _openLightbox(index) {
    this.setState({
      lightboxShowing: true,
      lightboxSelected: index
    });
  }

  _closeLightbox() {
    this.setState({
      lightboxShowing: false,
      lightboxSelected: null
    });
  }
}
 
export default ImagesGrid