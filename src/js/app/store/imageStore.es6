import Api from './api.es6'

const SEARCH_TERM = "goal";

var _data = {
  images: null
}


var ImageStore = {
  getData: () => {
    return new Promise(
      (resolve, reject) => {
        if(_data.images) {
          resolve(_data.images);
        } else {
          Api.getImages(SEARCH_TERM).then( (data) => {
            _data.images = data.items;
            resolve(_data.images);
          })
        }
      }
    )
  }
}

export default ImageStore