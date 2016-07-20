import React from 'react'
import Api from '../store/api.es6'
import ImageStore from '../store/imageStore.es6'
import Loading from '../components/loading.es6'
import ImagesGrid from '../components/imagesGrid.es6'

 
class Home extends React.Component {

  state = {
    images: null
  }

  componentWillMount() {
    ImageStore.getData().then((data) => {
      this.setState({
        images: data
      });
    });
  }

  render() {
    let content = <Loading/>;

    if(this.state.images) {
      content = <ImagesGrid images={this.state.images}/>;
    }

    return <div className="content home">
      <label>Google Image Search, grid layout, lightbox app.</label>
      {content}
    </div>;
  }
}

 
export default Home