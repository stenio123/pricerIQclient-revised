import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('clients', { path: '/clients' });
  this.resource('items', {path: '/items'});
  this.resource('quotes', {path: '/quotes'});
  this.route('signup', {path: '/signup'});
});

export default Router;
