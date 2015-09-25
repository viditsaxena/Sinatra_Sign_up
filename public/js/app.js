console.log ("Fully Loaded");

// var token = $('#api-token').val();
// $.ajaxSetup ({
//   headers:{
//     "accept": "application/json",
//     "token": token
//   }
// });
var app = app || {};

app.signups = new app.SignupCollection();

app.signupsPainter = new app.SignupListView({
  collection: app.signups,
  el: $('#all-the-signups')
});

app.signups.fetch();

$('form.create-signup').on('submit', function(e){
  e.preventDefault();
  var newName = $(this).find("#my-name").val();
  var newEmail = $(this).find("#my-email").val();
  app.signups.create( {name: newName, email: newEmail} );
});
