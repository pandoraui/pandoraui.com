
(function() {
  app.Model = (function() {

    var Model = Class.extend({
      init: function(attributes){
        var key, value;
        for (key in attributes) {
          value = attributes[key];
          this[key] = value;
        }
      }
    });

    return Model;

  })();

}).call(this);
