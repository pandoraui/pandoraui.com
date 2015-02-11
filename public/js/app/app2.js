define(['application','settings','util','events'],function(App,settings) {

  app = $.extend(app,{
    $: $,
    $$: $$,
    collections: {},
    models: {},
    templates: {},
    views: {},
    init: function(){
      console.log('app init');
      this.showLoading();
      console.log('data');

      //this.setting = config;
      // this.store = new Store;
      // this.Settings = new settings;

      this.hideLoading();
    },
    showLoading: function() {
      document.body.classList.remove('_noscript');
      document.body.classList.add('_loading');
    },
    hideLoading: function() {
      document.body.classList.remove('_booting');
      document.body.classList.remove('_loading');
    }

    
    
  })
  return app
})