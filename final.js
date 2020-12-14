
var audio = document.getElementById("rain.m4a");
function enableAutoplay() { 
  audio.autoplay = true;
  audio.load();
}

function enableLoop() { 
  audio.loop = true;
  audio.load();
} 

function showText(text){
    document.getElementById("text").innerHTML=text;
}
function hide(){
    document.getElementById("text").innerHTML="";
}

