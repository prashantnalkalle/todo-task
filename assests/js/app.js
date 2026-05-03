const cl =console.log;
const todocontainer = document.getElementById('todo-container')
const todoform = document.getElementById('todoform')
const todoitem = document.getElementById('todoitem')
const updatetodo = document.getElementById('updatetodo')
const addtodo = document.getElementById('addtodo')



// cl(addtodo)
// cl(updatetodo)

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
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary " onclick="onEdit(this)"></i>
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
							<i type="button" class="fa-solid fa-pen-to-square fa-2x text-primary" onclick="onEdit(this)"></i>
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
let EditId;
function onEdit(ele){
   EditId = ele.closest('li').id;

  let Edit_Obj = todoArr.find(ele => {
    return ele.todoId == EditId
  })

  // cl(Edit_Obj)
  todoitem.value = Edit_Obj.todoItem;
  addtodo.classList.add('d-none');
  // cl(addtodo.classList)
  updatetodo.classList.remove('d-none');
}

function onUpdatehandl(ele){
let update_id = EditId;
let updatedToDo ={
  todoItem : todoitem.value,
  todoId : update_id
}

let index = todoArr.findIndex(ele => ele.todoId == update_id)

todoArr[index] = updatedToDo

let li = document.getElementById(update_id).firstElementChild

li.innerText = updatedToDo.todoItem

todoform.reset();
addtodo.classList.remove('d-none')
updatetodo.classList.add('d-none')

 Swal.fire({
  title : `Todo Item ${updatedToDo.todoItem} updated successfully !!!`,
  icon : 'success',
  timer : 3000
 })


}



todolist(todoArr);

todoform.addEventListener('submit',onsubmithand)
updatetodo.addEventListener('click',onUpdatehandl)