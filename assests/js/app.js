const cl =console.log;
const todocontainer = document.getElementById('todo-container')
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

todoArr.forEach(ele => {
    
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

todolist(todoArr);