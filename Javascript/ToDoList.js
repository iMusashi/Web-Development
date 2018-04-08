var todolist = [];
var userInput = getInputType();
    while(userInput != "quit"){
        if(userInput=="new"){
            getInputValue();
        }
        else if(userInput=="list"){
            todolist.forEach(function(todoItem,i){
                console.log(i +": " +  todoItem);
            })
        }
        else if(userInput == "delete"){
            getTodoItemToDelete();
        }
        userInput = getInputType();
    }


function getTodoItemToDelete(){
    var index = prompt("Please enter the index of the item");
    todolist.splice(index,1); 
};

function getInputType(){
    return prompt("What would you like to do?");
};

function getInputValue(){
    var todoItem = prompt("Enter a new todo");
    todolist.push(todoItem);
    console.log(todoItem + " has been pushed to list.");
};
