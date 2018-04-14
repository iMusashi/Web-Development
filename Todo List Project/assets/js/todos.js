$(document).ready(function(){
    var newItem = $("input");
    var addItem = $("#idOpenInput");
    var mainList = $("#itemsList");
    var ulItem = $("ul");
    var liItem =$("li");

    addItem.on("click",function(){
        $(this).closest("div").find("input").fadeToggle(50);
    });

    newItem.on("keypress",function(event){
        if(event.which != 13)
            return;
        var todoText = $(this).val();
        if(todoText == "")
            return;
        $(this).val("");
        var todoElement = $("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        mainList.append(todoElement);                
    });
    
    ulItem.on("click","li",function(){
        $(this).toggleClass("completedItem");
    });

    ulItem.on("click",".fa-trash-alt",function(event){
        $(this).closest("li").fadeOut(function(){$(this).remove();});
        event.stopPropagation();
    }); 
});