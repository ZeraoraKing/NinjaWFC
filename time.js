window.onload = function () {
    document.getElementById("header").className = "headerslide";
    document.getElementById("logo-home").addEventListener("click", defaulttheme);

    time();
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

function time(){
  var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into HTML
  document.getElementById("timestamp").innerHTML = datetime;
}




    setInterval(function () {

        time()

    }, 1000);