(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
$('#download-button').click(function(e) {
// Initializing Variables With Form Element Values
var firstname = $('#my-name').val();
var email = $('#my-email').val();
// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;
var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
// To Check Empty Form Fields.
if (firstname.length == 0) {
$("#firstname").focus();
return false;
}
// Validating Name Field.
else if (!firstname.match(name_regex) || firstname.length == 0) {
$('#p1').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#firstname").focus();
return false;
}

// Validating Email Field.
else if (!email.match(email_regex) || email.length == 0) {
$('#p3').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
} else {
alert("Form Submitted Successfuly!");
return true;
}
});
});
