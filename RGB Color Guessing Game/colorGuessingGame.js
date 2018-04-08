colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
]   

var lstColorBlocks = document.querySelectorAll(".mixedColorBlock");
var bodyObj = document.querySelector("body");
var pickedColor = colors[3];
var rgbHeaderDisplayObj = document.querySelector("#rgbHeaderValue");
rgbHeaderDisplayObj.textContent = String(pickedColor).toUpperCase();

for(var i = 0; i < lstColorBlocks.length; i++)
{
    lstColorBlocks[i].style.backgroundColor = colors[i];
    lstColorBlocks[i].addEventListener("click", function(){
        if(this.style.backgroundColor != pickedColor)
        { 
            this.style.backgroundColor = bodyObj.style.backgroundColor;
        }
        else
        {
            
        }
    });
}

