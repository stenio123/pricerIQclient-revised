/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

/**
 * using ember-cli-less
 * maps less to css
 * @type {EmberApp}
 */
var app = new EmberApp({
  outputPaths: {
    app: {
      css: {
        'app': '/assets/client-revised.css',
        'sb-admin2': '/assets/sb-admin2.css'
        //'theme-orange': '/assets/theme-orange.css',
        //'theme-purple': '/assets/theme-purple.css'
      }
    }
  },
  lessOptions: {
    paths: [
      'bower_components/bootstrap/less'
    ]
  }
});



// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

/** to use bootstrap and less, as described here 
 *  http://stackoverflow.com/questions/23349959/recommended-way-to-include-bootstrap-library-in-ember-js-ember-cli-app 
 *  */

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map');
//for some reason it now works without this.,...
//perhaps it is necessary to clean cache once add new asset?
//app.import('dist/assets/sb-admin2.css');

// For removing GET http://localhost:4200/assets/bootstrap.css.map 404 (Not Found) error

app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {

destDir: 'assets'

});

// for glyphicons
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {

destDir: 'fonts'

});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {

destDir: 'fonts'

});

// for font awesome
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {

destDir: 'fonts'

});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {

destDir: 'fonts'

});
app.import('bower_components/font-awesome//css/font-awesome.css', {

destDir: 'assets'

});

module.exports = app.toTree();
