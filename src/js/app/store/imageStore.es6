import Api from './api.es6'

const SEARCH_TERMS = [
  "goal",
  "road",
  "direction"
];

var _data = {
  images: [
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"},
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"},
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"},
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"},
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"},
    {link:"http://www.macforensicslab.com/images/icon_TriageDirection.jpg"}
  ]
}


var ImageStore = {
  getData: () => {
    return new Promise(
      (resolve, reject) => {
        if(_data.images.length) {
          resolve(_data.images);
        } else {
          let _ajax_count = 0
          for(let keyword of SEARCH_TERMS) {
            Api.getImages(keyword).then( (data) => {
              // push data into local store
              _data.images = _data.images.concat(data.items);

              // count ajax calls
              _ajax_count ++;

              // if all ajax calls come back, resolve it
              if (_ajax_count == SEARCH_TERMS.length) {
                resolve(_data.images);
              }
            })
          }
        }
      }
    )
  }
}

export default ImageStore