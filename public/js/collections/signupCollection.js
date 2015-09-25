var app = app || {};

// Backbone Collection... knows how to manages... a bunch of something
app.SignupCollection = Backbone.Collection.extend({
  model: app.Signup,
  url: '/api/signups'
});
