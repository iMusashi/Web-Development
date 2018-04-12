$(document).ready(function(){
    var newItem = $("#newTodoItem");
    var addItem = $("#idOpenInput");
    
    addItem.on("click",function(){
        $(this).closest("div").find("input").toggleClass("dispnone");
    });
    newItem.on("keypress",function(event){
        if(event.which != 13)
            return;
        var todoText = $(this).val();
        var todoElement = $("<div>" + todoText + "</div>")                
    })
});