import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('contact');
  this.route('table');
  this.route('about', { path: '/about' });
  this.route('favorites', { path: '/favs' });
  this.route('posts', function() {
    this.route('new');
  });
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('post', { path: '/post/:post_id' });
});

export default Router;
