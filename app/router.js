import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("index", {path: "/"});
  this.route("works");
  this.route("work", {path: "/works/:work_id"});
  this.route('creators');
  this.route("creator", {path: "/creators/:creator_id"});
});

export default Router;
