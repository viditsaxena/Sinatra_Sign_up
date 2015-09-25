var app = app || {};

// Backbone List View... knows how to be on the screen  $el
app.SignupListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var signupObject;
    var $view;
    var signupsObjects = this.collection.models;
    for (var i = 0; i < signupsObjects.length; i++) {
      signupObject = signupsObjects[i];
      $view = new app.SignupView({model: signupObject});
      $view.render();
      this.$el.append( $view.$el );
    }
  }
});
