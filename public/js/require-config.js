requirejs.config({
   baseUrl :'',
    paths: {
    'angular':                  'public/js/vendor/angular/angular',
    'angular-route':            'public/js/vendor/angular/angular-route',
    'angular-ui-router':        'public/js/vendor/angular/angular-ui-router',
    
    'controllerList':           'public/js/controllerList',
    'jquery':                   'public/js/UI/jquery.min',
    'bootstrap':                'public/js/UI/bootstrap',
    
    'App':                      'public/js/app',
    'require':                  'pubilc/js/vendor/requirejs/require',
    'domReady':                 'public/js/vendor/requirejs/require-domReady'
    //indluce your own paths here:
  },

  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angular-route':        ['angular'],
    'angular-ui-router':    ['angular'],
    
    "jquery.alpha":         ["jquery"],
    "jquery.beta":          ["jquery"]
  }    
    
});
 
//after confige for paths and shim activate main.js
requirejs(['public/js/main']);