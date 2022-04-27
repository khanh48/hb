document.addEventListener('DOMContentLoaded', function () {
    var a = document.querySelector('.no');
    var b = document.querySelector('.qs');
    var nut2 = document.querySelector('.os');
    var c = document.querySelector('.nd');
    var d = document.querySelector('.yes');
    var e = document.querySelector('.ib');
    var bg = document.querySelector('.b1');
    var ib = document.querySelector('.ib');
    var txt = document.querySelector('.text');
    var onSound = document.querySelector('.osy');
    var offSound = document.querySelector('.osn');
    var wn = 0;
    var hn = 0;
    var change = 1;
    var audio = new Audio('lib/sound/motdemsay.mp3');

    setTimeout(changeBackground, 3000)
    if (window.innerWidth < 768) {
        wn = 200;
        hn = 150;
    }
    else {
        wn = 250;
        hn = 200;
    }
    var w = window.innerWidth - wn;
    var h = window.innerHeight - hn;
    a.onmousedown = function () {
        b.style.left = `${Random(0, w)}px`;
        b.style.top = `${Random(0, h)}px`;
        c.innerHTML = "Ơ sao lại hong, iu tớ điii :<"
    }
    d.onclick = function () {
        c.innerHTML = "Awww yêu bé,<br>nhắn tin cho tớ đi nè <3";
        a.style.display = "none";
        d.style.display = "none";
        e.style.display = "unset";
    }
    document.oncopy = function () {
        return false;
    }


    document.ondragstart = function () {
        return false;
    }

    document.onselectstart = function () {
        return false;
    }
    var count = 0;


    function starttimer() {
        count += 1;
        if (count == 5) {
            b.style.display = "unset";
            clearInterval(hi);
        }
    }
    function Random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function changeBackground() {
        if (change > 5)
            change = 0;
        bg.style.backgroundImage = `url('lib/img/meo${change}.gif')`;
        change++;
        setTimeout(changeBackground, 7000)
    }

    onSound.onclick = function () {
        audio.loop = true
        audio.volume = 1
        audio.play()
        nut2.style.display = "none";
        hi = setInterval(starttimer, 1000);
        txt.style.animationName = "anchu";
    }

    offSound.onclick = function () {
        nut2.style.display = "none";
        hi = setInterval(starttimer, 1000);
        txt.style.animationName = "anchu";
    }

    ib.onclick = function () {
        if (window.innerWidth < 768) {
            window.open("https://www.facebook.com/khanh48", '_blank').focus();
        }
        else {
            window.open("https://www.facebook.com/messages/t/khanh48", '_blank').focus();
        }
    }
})