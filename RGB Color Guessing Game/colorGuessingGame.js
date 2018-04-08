colors=[
    "RGB(255, 0, 0)",
    "RGB(255, 255, 0)",
    "RGB(255, 0, 255)",
    "RGB(0, 255, 255)",
    "RGB(0, 255, 0)",
    "RGB(0, 0, 255)"
]   

var lstColorBlocks = document.querySelectorAll(".mixedColorBlock");
var bodyObj = document.querySelector("body");
for(var i = 0; i < lstColorBlocks.length; i++)
{
    lstColorBlocks[i].style.backgroundColor = colors[i];
    lstColorBlocks[i].addEventListener("click", function(){
        if(this.style.backgroundColor != pickedColor)
        { this.style.backgroundColor == bodyObj.style.backgroundColor; }
        else{}
    });
}

var pickedColor = colors[3];
var rgbHeaderDisplayObj = document.querySelector("#rgbHeaderValue");
rgbHeaderDisplayObj.textContent = pickedColor;