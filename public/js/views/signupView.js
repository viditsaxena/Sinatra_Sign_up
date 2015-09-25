var app = app || {};

// Backbone Model View... knows how to be on the screen  $el
app.SignupView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  tagName: 'div',
  className: 'signup',
  template: _.template(  $('#signup-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $(html);
    this.$el.append( $html );
  },
  events: {
    'click button.remove': 'removeSignup'
  },
  removeSignup: function(){
    this.model.destroy();
    this.$el.remove();
  }
});
