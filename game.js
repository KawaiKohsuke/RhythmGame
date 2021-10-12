const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
let state = Array(2);
state.fill(0);

let cvs, ctx;

let audio = new Audio();
audio.src = "./shining_star.mp3";
audio.volume = 0.3;

window.onload = function() {
    cvs = document.getElementById("a");
    ctx = cvs.getContext("2d");

    ctx.fillText('F', 40, 40);
    ctx.fillText('J', 65, 40);

    // 画面サイズ
    ctx.strokeRect(0, 0, 400, 400);

    // スタートボタン
    ctx.strokeRect(150, 250, 100, 50);

    ctx.strokeRect(40, 40, 20, 20);
    ctx.strokeRect(65, 40, 20, 20);
};
 

// キー押下時
document.onkeydown = function(e) {
    let key = e.key;

    let date = new Date();
    
    if (key == 'f') {
        if (state[0] == 0) {
            state[0] = 1;

            ctx.fillRect(40, 40, 20, 20);

            console.log("DOWN : " + key);
            console.log(date.getHours() + ":" + date.getMinutes() + ":" +
                        date.getSeconds() + "." + date.getMilliseconds());
        }
    }
    else if (key == 'j') {
        if (state[1] == 0) {
            state[1] = 1;

            ctx.fillRect(65, 40, 20, 20);

            console.log("DOWN : " + key);

            audio.play();
        }
    }
};

document.onkeyup = function(e) {
    let key = e.key;

    if (key == 'f') {
        if (state[0] == 1) {
            state[0] = 0;
            
            ctx.clearRect(40, 40, 20, 20)

            console.log("UP : " + key);
        }
    }
    else if (key == 'j') {
        if (state[1] == 1) {
            state[1] = 0;

            ctx.clearRect(65, 40, 20, 20)

            console.log("UP : " + key);

            audio.pause();
        }
    }
};