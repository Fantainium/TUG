const canvas = document.querySelector("#game");
const ctx = canvas.getContext('2d');

const img = new Image()
img.src = "https://www.ropesdirect.co.uk/images/cache/Manila/manila-rope-20mm.500.jpg"


let leftPresses = 0
let rightPresses = 0
let redPos = Math.round(canvas.width / 4 / 2)
const origPos = redPos
const rgb = [100, 255, 100]
const inter = setInterval(() => {
    rgb[0] = 100 + (origPos - redPos) * 2
    rgb[2] = 100 + (redPos - origPos) * 2
    rgb[1] = 100 - (rgb[0] - rgb[2])
    document.querySelector('.main').style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    ctx.fillStyle = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    redPos += rightPresses - leftPresses;
    if (redPos < 0) {
        clearInterval(inter);
        alert("Left wins!");
        location.reload()
    }
    if (redPos > canvas.width / 4 - 1) {
        clearInterval(inter);
        alert("Right wins!");
        location.reload()

    }
    for (let i = 0; i < canvas.width / 4; i++) {
        ctx.fillStyle = "black";
        if (i === redPos) ctx.fillStyle = "red";
        ctx.fillRect(4 * i, 16, 4, 16);
    }
    leftPresses = 0
    rightPresses = 0
}, 10);

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 65) {
        leftPresses++
    }
    else if (event.keyCode == 76) {
        rightPresses++
    }
});
