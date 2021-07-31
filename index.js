var numberofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makesound(this.innerHTML);
    buttonflash(this.innerHTML);
  });
}

document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonflash(event.key);
});

function buttonflash(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  window.setTimeout(removeclass,100);
  function removeclass(){
  document.querySelector("."+currentkey).classList.remove("pressed");
}
}

function makesound(value){
  switch(value){
    case "w":
      var song = new Audio("sounds/crash.mp3");
      song.play();
      break;
    case "a":
      var song = new Audio("sounds/kick-bass.mp3");
      song.play();
      break;
    case "s":
      var song = new Audio("sounds/snare.mp3");
      song.play();
      break;
    case "d":
      var song = new Audio("sounds/tom-1.mp3");
      song.play();
      break;
    case "j":
      var song = new Audio("sounds/tom-2.mp3");
      song.play();
      break;
    case "k":
      var song = new Audio("sounds/tom-3.mp3");
      song.play();
      break;
    case "l":
      var song = new Audio("sounds/tom-4.mp3");
      song.play();
      break;
    default: console.log(value);
  }
}
//
