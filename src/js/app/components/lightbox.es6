import React from 'react'
import Direction from '../enums/direction.es6'
import Icon from './icon.es6'


class Lightbox extends React.Component {

  state = {
    selectedIndex: this.props.selectedIndex
  }

  render() {
    var selectedImg = {
      link: this.props.images[this.state.selectedIndex].link,
      title: this.props.images[this.state.selectedIndex].title
    };

    return <div className="overlay lightbox">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">
            Lightbox Gallery
          </div>
          <a className="modal-close" onClick={this.props.onClose}>
            <Icon iconName="close" alt="X"/>
          </a>
        </div>
        <div className="modal-body">
          <div className="nav">
            <a className="left" onClick={this._onNavigate.bind(this, Direction.PREV)}>
              <Icon iconName="chevronleft" alt="<"/>
            </a>
          </div>
          <img src={selectedImg.link}/>
          <div className="nav">
            <a className="right" onClick={this._onNavigate.bind(this, Direction.NEXT)}>
              <Icon iconName="chevronright" alt=">"/>
            </a>
          </div>
        </div>
        <div className="modal-footer">
          {selectedImg.title}
        </div>
      </div>
    </div>;
  }

  _onNavigate(direction) {
    var currentIndex = this.state.selectedIndex;

    switch (direction) {
      case Direction.PREV:
        currentIndex--;
        break;
      case Direction.NEXT:
        currentIndex++;
        break;
    }

    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex > this.props.images.length-1) {
      currentIndex = this.props.images.length -1;
    }

    this.setState({
      selectedIndex: currentIndex
    });
  }
}

 
export default Lightbox