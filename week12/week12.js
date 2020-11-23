let hiphop = document.querySelector('button[name="hiphop"]');
hiphop.addEventListener('click', goToHiphop);

let indie = document.querySelector('button[name="indie"]');
indie.addEventListener('click', goToIndie);

let darkwave = document.querySelector('button[name="darkwave"]');
darkwave.addEventListener('click', goToDarkWave);

let rock = document.querySelector('button[name="rock"]');
rock.addEventListener('click', goToRock);

let kpop = document.querySelector('button[name="kpop"]');
kpop.addEventListener('click', goToKpop);

function goToHiphop () {
	window.location.href = "hiphop.html";
}

function goToIndie () {
	window.location.href = "indie.html";
}

function goToDarkWave () {
	window.location.href = "darkwave.html";
}

function goToRock () {
	window.location.href = "rock.html";
}

function goToKpop () {
	window.location.href = "kpop.html";
}

$('document').ready(function () {
    $('#Childish').click(function () {
        var audio = {};
        audio["3005"] = new Audio();
        audio["3005"].src = "3005.mp3"
        audio["3005"].addEventListener('load', function () {
            audio["3005"].play();
        });
    });
}); 


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
/*let thePlay = document.querySelector('body');
thePlay.addEventListener('click', theClick);
function theClick(){
	console.log("click!!!");
    $('audio#3005')[0].play();
}

$(document).ready(function() {
    $(#'Childish').on('click', function() {
        $('audio#3005')[0].play();
    });
});

$('.button').on('click', function () { 
  var obj = document.createElement("audio");
      obj.src = "3005.mp3"; 
        obj.play(); 
});
var isPlaying = false;
var songTime = 0;
var song = document.createElement('audio');
song.setAttribute('src', '3005.mp3');
$.get();

$('#Childish').click(function(){
    song.play();
    isPlaying = false;
    console.log("playing");
})

$(document).ready(function() {
    $.fn.myFunction = function() { 
        $('audio#pop')[0].play();
    }
    $(".Childish").click(function(){
        $.fn.myFunction();
    });
});*/