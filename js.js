let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');

let size = 640;
cnv.width = size;
cnv.height = size;

const appleimg=new Image();
appleimg.src='apple.png';
const snakeimg=new Image();
snakeimg.src='snake.png';

const player = [
    [0, 0]
];
const apple = [128, 128];
let movedirection = 'right';
let box = size / 10;
let score=0;
let schit=document.getElementById('score');


tick();
function tick() {
    if(player[0][0]==apple[0] && player[0][1]==apple[1]){
        score+=10;
        applenew();
    };
    schit.innerHTML=`Счёт: ${score}`;
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(appleimg, apple[0], apple[1]);

    for (let i = 0; i < player.length; i++) {
        ctx.fillStyle = 'green';
        ctx.drawImage(snakeimg, player[i][0], player[i][1]);
    };


    switch (movedirection) {
        case 'up':
            if (player[0][1] > 0) {
                player[0][1] -= box;
            } else {
                player[0][1] = size - box;
            }
            break;
        case 'down':
            if (player[0][1] < size - box) {
                player[0][1] += box;
            } else {
                player[0][1] = 0;
            }
            break;
        case 'left':
            if (player[0][0] > 0) {
                player[0][0] -= box;
            } else {
                player[0][0] = size - box;
            }
            break;
        case 'right':
            if (player[0][0] < size - box) {
                player[0][0] += box;
            } else {
                player[0][0] = 0;
            }
            break;
    }

};
function applenew(){
    apple[0]=Math.floor(Math.random()*size/box)*box;
    apple[1]=Math.floor(Math.random()*size/box)*box;
};

document.addEventListener('keydown', switchdirect);
function switchdirect(event) {
    if (event.code == 'KeyW') {
        movedirection = 'up';
    };
    if (event.code == 'KeyA') {
        movedirection = 'left';
    };
    if (event.code == 'KeyS') {
        movedirection = 'down';
    };
    if (event.code == 'KeyD') {
        movedirection = 'right';
    };
};


setInterval(tick, 100);