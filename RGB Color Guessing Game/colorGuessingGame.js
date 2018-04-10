var body = document.querySelector("body");
var lstColorBlocks = document.querySelectorAll(".mixedColorBlock");
var rgbHeaderDisplayObj = document.querySelector("#rgbHeaderValue");
var rgbHeaderObj = document.querySelector("#headerRGB");
var MessageObj = document.querySelector("#message");
var easyMode = document.querySelector("#easyActivity");
var desiredBlocks = 6;
easyMode.addEventListener("click",function(){
    desiredBlocks = 3;
    initializeBlocks();
    easyMode.classList.add("selectedMode");
    hardMode.classList.remove("selectedMode");
});
var hardMode = document.querySelector("#hardActivity");
hardMode.addEventListener("click",function(){
    desiredBlocks = 6;
    initializeBlocks();
    hardMode.classList.add("selectedMode");
    easyMode.classList.remove("selectedMode");
});

var newActivityButton = document.querySelector("#newActivity");
newActivityButton.addEventListener("click", function(){
    this.textContent = "New Colors";
    MessageObj.textContent ="";
    initializeBlocks();
});

function initializeBlocks(){
    rgbHeaderObj.style.backgroundColor = "steelblue";
    colors = generateRandomColors(desiredBlocks);
    pickedColor = randomColor(colors);
    rgbHeaderDisplayObj.textContent = String(pickedColor).toUpperCase();
    for(var i = 0; i < desiredBlocks; i++)
    {
        lstColorBlocks[i].style.backgroundColor = colors[i];
    }
    if(i < lstColorBlocks.length)
    {
        while(i<lstColorBlocks.length)
        {
            lstColorBlocks[i].style.backgroundColor = body.style.backgroundColor;
            i++;
        }
    }
};

var colors = generateRandomColors(6);
var pickedColor = randomColor(colors);
rgbHeaderDisplayObj.textContent = String(pickedColor).toUpperCase();
for(var i = 0; i < lstColorBlocks.length; i++)
{
    lstColorBlocks[i].style.backgroundColor = colors[i];
    lstColorBlocks[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor != pickedColor)
        { 
            this.style.backgroundColor = body.style.backgroundColor;
            MessageObj.textContent ="Try Again?";
        }
        else
        {
            MessageObj.textContent ="Correct!";
            newActivityButton.textContent = "Play Again?"
            rgbHeaderObj.style.backgroundColor = clickedColor;
            changeContentColors(clickedColor);
        }
    });
}


//Create newActivity button function.


function randomColor(colors){
    var index = Math.floor(Math.random()* colors.length);
    return colors[index];
}

function changeContentColors(color){
    for(var i = 0; i < desiredBlocks; i++)
    {
        lstColorBlocks[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num)
{
    var colors = [];
    for( var i = 0; i < num; i++)
    {
        colors[i] = "rgb(" + generateRandomRGB() + ", " + generateRandomRGB() + ", " + generateRandomRGB() + ")";
    }
    return colors;
}

function generateRandomRGB()
{
    return Math.floor(Math.random() * 256);
}
