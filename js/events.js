//define functions here

function getIt() {
  alert("Hey!");
  return;
}

function frameIt() {
  $('img').addClass("tasty");
  return;
}

function pressIt() {
  $("form").on("keydown", function(key) {
    if(key.which == 71){
    alert("You pressed G!");
    }
    return;
    });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
    return;
  });
}

$(document).ready(function(){

// call functions here

});
