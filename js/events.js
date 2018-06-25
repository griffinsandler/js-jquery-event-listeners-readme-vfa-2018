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
  
}

$(document).ready(function(){

// call functions here

});
