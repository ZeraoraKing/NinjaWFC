window.onload = function () {
    document.getElementById("header").className = "headerslide";
    document.getElementById("logo-home").addEventListener("click", defaulttheme);

    time();

    if (page == "index.html" || page == "codes.html") {

    }
    else if (page == "stats.html" || page == "error.html") {

    }
    else if (page == "tutorial.html") {

    }

    else {

        document.getElementById("creatorimg").addEventListener('click', ninjasound);
        document.getElementById("creatorimg2").addEventListener('click', oversound);
        document.getElementById("creatorimg3").addEventListener('click', wafflessound);
    }
    document.querySelectorAll('.button').forEach(button => {

        let div = document.createElement('div'),
            letters = button.textContent.trim().split('');

        function elements(letter, index, array) {

            let element = document.createElement('span'),
                part = (index >= array.length / 2) ? -1 : 1,
                position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
                move = position / (array.length / 2),
                rotate = 1 - move;

            element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
            element.style.setProperty('--move', move);
            element.style.setProperty('--rotate', rotate);
            element.style.setProperty('--part', part);

            div.appendChild(element);

        }

        letters.forEach(elements);

        button.innerHTML = div.outerHTML;

        button.addEventListener('mouseenter', e => {
            if (!button.classList.contains('out')) {
                button.classList.add('in');
            }
        });

        button.addEventListener('mouseleave', e => {
            if (button.classList.contains('in')) {
                button.classList.add('out');
                setTimeout(() => button.classList.remove('in', 'out'), 950);
            }
        });

    });
}

function defaulttheme(){
    eventclear = 1;
    document.getElementById("monthimg").src="";

        document.getElementById("header").style.backgroundColor = "RGB(56,20,96)";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";

        if (page == "index.html") {
            document.getElementById("newsp").innerHTML = "If you are reading this, it means that the website has worked and you can now connect to NinjaWFC! The website will be \"completed\" by the end of June and will have features like, Being able to detect how many players are on the server with more advanced methods, interactive design, and possibly mobile support (more to come).";
        }
        else {
        }
        document.getElementById("NinjaWFCTitle").innerHTML = "NinjaWFC";

        document.getElementById("logo-home").src = "https://i.ibb.co/GMK2Zst/logo.png";

        document.getElementById("monthimg").style.display="none";
}

function ninjasound() {

    audio = new Audio('gladiator.wav');

    audio.play();

}

function oversound() {

    audio = new Audio('lucario.wav');

    audio.play();

}
function wafflessound() {

    audio = new Audio('waffles.wav');

    audio.play();

}

function time() {
    current = new Date();

    chours = current.getHours();

    cmin = current.getMinutes();
    cdate = current.getDate();
    if(chours != 24){
    if (chours >= 12) {
        timeam = "pm"
        if(chours > 12){
        chours = chours - 12;
        }
        else{

        }

    }

    else {
        timeam = "am"
    }
}
else{
    timeam = "am"
    chours = chours - 12;
}
    if (cmin <= 9) {

        document.getElementById("time").innerHTML = chours + ":" + "0" + cmin + timeam;

    }

    else {

        document.getElementById("time").innerHTML = chours + ":" + cmin + timeam;

    }



    setInterval(function () {

        time()

    }, 60000);


    if (eventclear != 1){
    if (cmonth == 3 && cdate == 14) {

        document.getElementById("logo-home").src = "https://i.imgur.com/dJ3cQyl.png";

        document.getElementById("header").style.backgroundColor = "RGB(246,211,134)";

        document.getElementById("NinjaWFCTitle").innerHTML = "ZeraoraWFC";

        if (page == "index.html") {
            document.getElementById("newsp").innerHTML = "If you are reading this, it means that the website has worked and you can now connect to ZeraoraWFC! The website will be \"completed\" by the end of June and will have features like, Being able to detect how many players are on the server with more advanced methods, interactive design, and possibly mobile support (more to come).";
        }
        else {

        }
    }
    else if (cmonth >= 5 && cmonth < 8) {
        document.getElementById("header").style.backgroundColor = "RGB(255,168,7)";
        document.getElementById("monthimg").style.display="block";
        document.getElementById("monthimg").src="PalmTree.gif";
    }
    else if(cmonth==9){
        document.getElementById("header").style.backgroundColor = "RGB(235,97,35)";
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
        document.getElementById("time").style.color = "black";
        document.getElementById("monthimg").style.display="block";
        document.getElementById("monthimg").src="HalloweenPumpkin.gif";
    }

    else {

        document.getElementById("monthimg").src="";

        document.getElementById("header").style.backgroundColor = "RGB(56,20,96)";

        if (page == "index.html") {
            document.getElementById("newsp").innerHTML = "If you are reading this, it means that the website has worked and you can now connect to NinjaWFC! The website will be \"completed\" by the end of June and will have features like, Being able to detect how many players are on the server with more advanced methods, interactive design, and possibly mobile support (more to come).";
        }
        else {
        }
        document.getElementById("NinjaWFCTitle").innerHTML = "NinjaWFC";

        document.getElementById("logo-home").src = "logo.png";
        document.getElementById("monthimg").style.display="none";

    }
}
else{
    
}
}
