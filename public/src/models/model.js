// Generated by CoffeeScript 1.8.0
(function() {
  app.Model = (function() {
    function Model(attributes) {
      var key, value;
      for (key in attributes) {
        //console.log(key);
        value = attributes[key];
        this[key] = value;
      }
    }

    return Model;

  })();

}).call(this);
