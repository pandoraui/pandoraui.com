
//
// new Store();
//

(function() {
  this.Store = (function() {

    var localStorage = window.localStorage;

    var Store = Class.extend({
      get: function(key){
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (_error) {

        }
      },
      set: function(key, value){
        try {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (_error) {

        }
      },
      del: function(key){
        try {
          localStorage.removeItem(key);
          return true;
        } catch (_error) {

        }
      },
      clear: function(){
        try {
          localStorage.clear();
          return true;
        } catch (_error) {

        }
      }
    });

    return Store;

  })();

}).call(this);
