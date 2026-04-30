const cl =console.log;
const todocontainer = document.getElementById('todo-container')
const todoform = document.getElementById('todoform')
const todoitem = document.getElementById('todoitem')


let todoArr = [
  {
    todoItem: "CSS",
    todoId: "2qwe12-231-231wd-ew112e",
  },
  {
    todoItem: "JS & ES6",
    todoId: "2qwe12-231-231wd-ew112e",
  },
  {
    todoItem: "HTML",
    todoId: "2qwe12-231-231wd-ew112e",
  },
];

function todolist(arr){
    let result =``

arr.forEach(ele => {
    
 result += ` <li class="list-group-item d-flex justify-content-between">
						<strong>${ele.todoItem}</strong>
						<div>
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
							<i type="button" class="fa-solid fa-trash fa-2x text-danger"></i>
						</div>
						
					</li>
            `
})

todocontainer.innerHTML=result
}

function onsubmithand(ele){
  ele.preventDefault();
  // cl('submited')
  let newtodo ={
    todoItem : todoitem.value,
    todoId : Date.now().toString()
  }
  todoArr.push(newtodo)
  let li = document.createElement('li')
  li.className="list-group-item d-flex justify-content-between"

  li.innerHTML =`<strong>${newtodo.todoItem}</strong>
						<div>
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
							<i type="button" class="fa-solid fa-trash fa-2x text-danger"></i>
						</div>`

  todocontainer.append(li)          
  todoform.reset()

  // cl(newtodo)
}

todolist(todoArr);

todoform.addEventListener('submit',onsubmithand)