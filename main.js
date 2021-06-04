const container = document.querySelector(".container");
const todoListContainer = document.querySelector(".todoList");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

const todoList = [];

function renderTodoList() {
  todoListContainer.innerHTML = "";

  if (todoList.length === 0) {
    const doneNotice = document.createElement("h3");

    doneNotice.textContent = "You have nothing to do!";

    return todoListContainer.appendChild(doneNotice);
  }

  todoList.forEach(function (todo, i) {
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    p.textContent = todo.content;
    button.textContent = "Complete";
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("data-index", i);

    card.setAttribute("class", "card");
    cardBody.setAttribute("class", "card-body");

    cardBody.appendChild(p);
    cardBody.appendChild(button);

    card.appendChild(cardBody);

    todoListContainer.appendChild(card);
  });
}

function addTodo(contentInput) {
  todoList.push({
    complete: false,
    content: contentInput,
  });

  renderTodoList();
}

function removeTodo(index) {
  if (!index) {
    return null;
  }

  todoList.splice(index, 1);

  renderTodoList();
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = todoInput.value.trim();

  todoInput.value = "";

  addTodo(inputValue);
});

todoListContainer.addEventListener("click", function (event) {
  removeTodo(event.target.dataset.index);
});

renderTodoList();
