var btnColorChange = document.getElementsByTagName("button")[0];
var bdy = document.querySelector("body");
bdy.style.backgroundColor = "Purple";
var isPink = false;
btnColorChange.addEventListener("click", function(){
    if(isPink)
    {
        bdy.style.backgroundColor = "purple"
    }
    else
    {
        bdy.style.backgroundColor = "pink";
    }
    isPink = !isPink;
});