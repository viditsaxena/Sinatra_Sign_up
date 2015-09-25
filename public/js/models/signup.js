var app = app || {};

// Backbone Model... knows how to be a object
app.Signup = Backbone.Model.extend({
  defaults:{
    'name': 'tbd',
    'email': 'tbd'
  }
});
