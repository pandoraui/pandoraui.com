define(['application'],function(App,settings) {

  var app = {
    init: function(){
      console.log('app init');
      this.showLoading();
    },
    showLoading: function() {
      document.body.classList.remove('_noscript');
      document.body.classList.add('_loading');
    },
    hideLoading: function() {
      document.body.classList.remove('_booting');
      document.body.classList.remove('_loading');
    }

    
    
  }
  window.app = app;
  return app
})