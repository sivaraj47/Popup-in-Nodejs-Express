var BtnPopup = document.getElementById("BtnPopup");
var OpModel = document.getElementById("OpModel");
var Clsbtn = document.getElementById("Clsbtn");

BtnPopup.addEventListener("click", function(){
  OpModel.style.display ="block";
});

Clsbtn.addEventListener("click", function() {
  OpModel.style.display="none";
});

window.addEventListener("click", function(e){
  if(e.target==OpModel){
    OpModel.style.display="none";
  }
});
