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
    todoId: "2qwe12-231-231wd-ew1133",
  },
  {
    todoItem: "HTML",
    todoId: "2qwe12-231-231wd-ew11563",
  },
];


function todolist(arr){
    let result =``

arr.forEach(ele => {
    
 result += ` <li class="list-group-item d-flex justify-content-between" id=${ele.todoId.toString()}>
						<strong>${ele.todoItem}</strong>
						<div>
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
							<i type="button" class="fa-solid fa-trash fa-2x text-danger" onclick="onRemove(this)"></i>
						</div>
						
					</li>
            `
})

todocontainer.innerHTML=result
}

function onsubmithand(ele){
  ele.preventDefault();
  let newtodo ={
    todoItem : todoitem.value,
    todoId : Date.now().toString()
  }
  todoArr.push(newtodo)
  let li = document.createElement('li')
  li.className=`list-group-item d-flex justify-content-between`
  li.id = newtodo.todoId.toString();
  li.innerHTML =`<strong>${newtodo.todoItem}</strong>
						<div>
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
							<i type="button" class="fa-solid fa-trash fa-2x text-danger" onclick="onRemove(this)"></i>
						</div>`

  todocontainer.append(li)          
  todoform.reset()
  Swal.fire({
  title: `New ToDo item ${newtodo.todoItem} is added successfully !!!!`,
  icon: "success",
  timer : 3000
  });
 
}

function onRemove(ele){
 let RemoveId = ele.closest("li").id;

 let getIndex = todoArr.findIndex(ele =>{
  return ele.todoId == RemoveId
 })

 let removeitem = todoArr.splice(getIndex,1)
 ele.closest('li').remove()

 Swal.fire({
  title : `Todo Item ${removeitem[0].todoItem} removed successfully !!!`,
  icon : 'success',
  timer : 3000
 })

}





todolist(todoArr);

todoform.addEventListener('submit',onsubmithand)