import Es6Promise from 'es6-promise-polyfill'

const API_KEY = "AIzaSyBeQKxCMRExRShOClX1Ei1VFdjdUI7wX98";
const GOOGLE_SEARCH_ENGINE_ID = "013521578711198445725:wxlfdxdhixc";


var _request = {
  // http get request
  ajaxGet: (url) => {
    return new Es6Promise.Promise(
      (resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
          if (request.status === 200) {
            // Success
            resolve(request.response);
          } else {
            // Something went wrong (404 etc.)
            reject(new Error(request.statusText));
          }
        }
        request.onerror = () => {
          reject(new Error('XMLHttpRequest Error: ' + request.statusText));
        };

        request.open('GET', url);
        request.send();    
      }
    )
  },
  // jsonp
  jsonp: (url) => {
    return new Es6Promise.Promise(
      (resolve, reject) => {
        var id = '' + Math.round(99999 * Math.random());
        var callbackName = 'jsonp_callback_' + id;
        window[callbackName] = (data) => {
            delete window[callbackName];
            var ele = document.getElementById(id);
            ele.parentNode.removeChild(ele);
            resolve(data);
        }

        var src = url + '&callback=' + callbackName;
        var script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.addEventListener('error', reject);

        (document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(script);
      }
    )
  }
}

var Api = {
  getImages: (keyword) => {
    var url = "https://www.googleapis.com/customsearch/v1?";
    url += "key=" + API_KEY;
    url += "&cx=" + GOOGLE_SEARCH_ENGINE_ID;
    url += "&q=" + keyword;
    url += "&searchType=image&imgSize=medium";

    return _request.jsonp(url);
  }
}

export default Api