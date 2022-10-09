const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}



function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;//
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //JSON.parse()는 array 로 바꿔줌!
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 화살표 함수 /// forEach 함수는 이 paintToDo 를 parsedToDos 배열의 요소마다 실행함.
}



// //filter : 
// const arr = [123, 123213, 12132, 12321, 123, 23, 231];
// function Fuct(potato) { return potato > 1000 };
// arr.filter(Fuct);

// const todoss = [{"text":"rty","id":1665129866927},{"text":"tr","id":1665129867837},{"text":"ret","id":1665129917507},{"text":"rt","id":1665130075846},{"text":"rt","id":1665130801063}];
// function myFilter(todo){ return todo.id !== 1665129866927};
// todoss.filter(myFilter);


// const arr = [1, 2, 3, 4]
// const newArr = arr.filter(item => item > 2);
// console.log(newArr);


