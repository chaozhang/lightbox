import Api from './api.es6'
import Es6Promise from 'es6-promise-polyfill'

const SEARCH_TERMS = [
  "goal",
  "leadership",
  "direction"
];

var _data = {
  images: []
}


var ImageStore = {
  getData: () => {
    return new Es6Promise.Promise(
      (resolve, reject) => {
        if(_data.images.length) {
          resolve(_data.images);
        } else {
          var _ajax_count = 0

          SEARCH_TERMS.forEach((keyword, index) => {
            Api.getImages(keyword).then( (data) => {
              // push data into local store
              _data.images = _data.images.concat(data.items);

              // count ajax calls
              _ajax_count ++;

              // if all ajax calls come back, resolve it
              if (_ajax_count == SEARCH_TERMS.length) {
                resolve(_data.images);
              }
            });
          });
        }
      }
    )
  }
}

export default ImageStore