var audio = document.createElement("audio");
audio.src = "assets/winds.mp3";

audio.addEventListener("canplaythrough", function () {
    
        audio.play();
        setTimeout(function(){
            audio.pause();
        },
        50000);
        
    }, false);