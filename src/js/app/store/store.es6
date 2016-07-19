import Api from './api.es6'

var _store = {
  data: {}
}

var Store = {
  getData: () => {
    var def = $.Deferred();

    if(_store.data) {
      def.resolve(_store.data);
    } else {
      Api.getData('url').done( (data) => {
        _store.data = data;
        def.resolve(_store.data);
      });
    }

    return def;
  }

}

export default Store