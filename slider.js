let image = document.getElementsByClassName("slide");
let length = image.length;
let i = 0;
var interval = setInterval(next, 2500,1);
function prev(x) {
    stop();
    if (i > 0) {
        image[i].style.animation = "prevOut 1s ease-in-out";
        image[i - x].style.animation = "prevIn 1s ease-in-out";
        image[i - x].style.display = "block";
        setTimeout(function(){image[i].style.display = "none";
        i--;},999); //so that image gets none after its slide
    }
    else {
        image[i].style.animation = "prevOut 1s ease-in-out";
        i = length-1;
        image[i].style.animation = "prevIn 1s ease-in-out";
        image[i].style.display = "block";
        setTimeout(function(){image[0].style.display = "none";},1800);
    }
    start();
    }

    function next(x) {
        stop();
        if (i < length - 1) {
            setTimeout(function(){image[i].style.display = "none"; i++;},1400)
            image[i].style.animation = "out 1s ease-in-out";
            image[i + x].style.animation = "in 1s ease-in-out";
            image[i + x].style.display = "block";
        }
        else {
            image[i].style.animation = "out 1s ease-in-out";
            i = 0;
            image[i].style.display = "block";
            image[i].style.animation = "in 1s ease-in-out";
            setTimeout(function(){image[length-1].style.display = "none";},999);
        }
        start();
    }

    function stop() {
        clearInterval(interval);
    }
    function start() {
        interval = setInterval(next, 2500, 1);
    }