window.onload = function () {
    var number = true;
    var music2 = document.getElementById("music2");
    var music_btn2 = document.getElementById("music_btn2");
    document.getElementById("music_btn2").onclick = function () {
        if (number === false) {
            number = true;
            music2.pause();
            music_btn2.src = "https://i.328888.xyz/2023/01/24/Oupbv.png";
        }
        else {
            number = false;
            music2.play();
            music_btn2.src = "https://i.328888.xyz/2023/01/24/OumVU.png";
        }
    }
}

function btn_display_block() {
    document.getElementById("jin_12_btn").style.display = "block";
}
function btn_display_none() {
    document.getElementById("jin_12_btn").style.display = "none";
}
