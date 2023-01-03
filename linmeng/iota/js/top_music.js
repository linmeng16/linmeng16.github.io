window.onload = function () {
    var number = true;
    var music2 = document.getElementById("music2");
    var music_btn2 = document.getElementById("music_btn2");
    document.getElementById("music_btn2").onclick = function () {
        if (number === false) {
            number = true;
            music2.pause();
            music_btn2.src = ".././images/音乐关闭.png";
        }
        else {
            number = false;
            music2.play();
            music_btn2.src = ".././images/音乐开启.png";
        }
    }
}