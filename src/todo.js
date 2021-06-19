if(document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
  var submitButton = document.getElementsByClassName("to-do-submit")[0]
  submitButton.addEventListener('click', ToDoSubmit)
}

function ToDoSubmit(event) {
  var submitButton = event.target
  var todoInput = submitButton.parentElement.getElementsByClassName("text-input")[0]
  if(todoInput.value != ""){
    var listItem = document.createElement('div')
    listItem.className = "to-do-item"

    var checkboxDiv = document.createElement('div')
    checkboxDiv.className = "item-checkbox"
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.addEventListener('click', crossOutItem)
    checkboxDiv.append(checkbox)

    var textDiv = document.createElement('div')
    textDiv.className = "item-text-div"
    var text = document.createElement('p')
    text.className = "item-text"
    text.innerText = todoInput.value
    textDiv.append(text)

    var buttonDiv = document.createElement('div')
    buttonDiv.className = "delete-item"
    var deleteButton = document.createElement('button')
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener('click', deleteListItem)
    buttonDiv.append(deleteButton)

    listItem.append(checkboxDiv)
    listItem.append(textDiv)
    listItem.append(buttonDiv)

    var todoList = document.getElementsByClassName("to-do-list")[0]
    todoList.append(listItem)

     todoInput.value = ""
  }
}

function deleteListItem(event) {
  var deleteButton = event.target
  deleteButton.parentElement.parentElement.remove()
}

function crossOutItem(event){
  var checkbox = event.target
  var textDiv = checkbox.parentElement.parentElement.getElementsByClassName("item-text-div")[0]
  var text = textDiv.getElementsByClassName("item-text")[0]
  if(checkbox.checked){
    text.style.color = "grey"
    text.style.textDecoration = "line-through"
  } else {
    text.style.color = "black"
    text.style.textDecoration = "none"
  }
}
