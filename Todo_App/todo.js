let todolist = [// default values
    {
        item:'go to college',
        date:"1/23/2024"

},
{
    item:'go to market',
    date:'2/23/2024'
}
];
display()
//adding item to list
function addtodo(){
    let input_Element=document.getElementById('todo-input')
    let todoItem = input_Element.value
     let date_element=document.getElementById('date-input')
    let tododate=date_element.value
    // console.log(todoItem)
todolist.push({item: todoItem,date: tododate})
input_Element.value=""
date_element.value=""
display()
}

// displaying items(tasks)
function display(){
    const display_items=document.querySelector('.todo-container')
    let new_content=""
for (let i = 0; i < todolist.length; i++) {

    let Item=todolist[i].item;
    let date=todolist[i].date;

    new_content =new_content + ` 
    
    <span> ${Item} </span>
    <span> ${date} </span>
    <button class='delete-button'
     onclick="todolist.splice(${i},1); display()">Delete</button>  

    `;
}
display_items.innerHTML=new_content
}
