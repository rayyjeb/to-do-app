// input tag
var inputText=document.getElementById("input");
// add tag
var subBtn = document.getElementById("button");
// To do List
var todoList= document.getElementById("todolist");

// array to store all to do elements, initially empty
// if(localStorage.getItem("todoArr")!=null){
//     var todoArr = JSON.parse(localStorage.getItem("todoArr"))
// }else{
//     var todoArr = []
// }

var todoArr = JSON.parse(localStorage.getItem("todoarr")) || [];

display();

// When Add Button is clicked 
subBtn.addEventListener("click", addItemToArray)

// when input is in focus and When Enter is Clicked add items to array to addItemToArray
inputText.addEventListener("keypress",(event)=>{
    
    if(event.key=="Enter"){
        addItemToArray()
    }
})


function addItemToArray(){
    // !EXTRA-> event.target.value==inputText.value)

    // push the value to array
    if (inputText.value!=""){ 
    todoArr.push(inputText.value);
    localStorage.setItem("todoarr",JSON.stringify(todoArr))
}
    // reset the value to empty string 
    inputText.value="";
    display()

}
function display(){
    todoList.innerHTML  = "";
    // Structur of li tag
    todoArr.map((curr,i) => {
        var listItem= `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})"> &times; </span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>

        </li>`;
// insert it inside <ul id="todolist">
        todoList.innerHTML+=listItem;         
    });
}
function deleteItem(index){
    // delete the element [index] from the array    
    todoArr.splice(index,1);
    localStorage.setItem("todoarr",JSON.stringify(todoArr))

    display();
}
function editItem(index){
    var newValue = prompt("Please Edit")
    todoArr.splice(index,1,newValue)
    localStorage.setItem("todoarr",JSON.stringify(todoArr))

    display()
}

// reset the todolist
document.getElementById("reset").addEventListener("click",()=>{
todoArr=[]
localStorage.setItem("todoarr",JSON.stringify(todoArr))

display()
})

// local storage
