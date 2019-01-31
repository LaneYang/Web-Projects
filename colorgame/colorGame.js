var numOfSquares=6
var colors = generateRandomColors(6);
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var rightColor = pickColor();
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = rightColor;
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyMode = document.querySelector("#Easy");
var hardMode = document.querySelector("#Hard");
easyMode.addEventListener("click", function () {
    easyMode.classList.add("selected");
    hardMode.classList.remove("selected");
    numOfSquares=3;
    colors = generateRandomColors(numOfSquares);
    rightColor = pickColor();
    colorDisplay.textContent = rightColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";

        }
    }
});
hardMode.addEventListener("click", function () {
        easyMode.classList.remove("selected");
        hardMode.classList.add("selected");
        numOfSquares=6;
        colors = generateRandomColors(numOfSquares);
        rightColor = pickColor();
        colorDisplay.textContent = rightColor;
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
);


reset.addEventListener("click", resetGame);

function resetGame() {
    colors = generateRandomColors(numOfSquares);
    rightColor = pickColor();
    colorDisplay = rightColor;


    for (var i = 0; i < squares.length; i++) {
        //assign colors to all squares.
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "lightskyblue";
}

for (var i = 0; i < squares.length; i++) {
    //assign colors to all squares.
    squares[i].style.backgroundColor = colors[i];
    //click listener.
    squares[i].addEventListener("click", gone);
}

function gone() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === rightColor) {
        messageDisplay.textContent = "Right";
        changeColorWhenRight(clickedColor);
        reset.textContent = "Play Again!";
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Wrong, keep guessing";
    }
}

function changeColorWhenRight(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num) {
    var arr = [];
    //add num random colors to arr
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

