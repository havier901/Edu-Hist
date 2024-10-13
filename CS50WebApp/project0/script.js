const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//Globals supplied by CS50
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// Globals supplied by me
let listCounter = 0
let checkedItems = 0
let uncheckedCount = 0

function newTodo() {

  // Create variable for input
  let todoItem = document.getElementById('to-do-item').value

  // Reset input to be blank
  document.getElementById('to-do-item').value = ""
  
  // Increment List Counter, Unchecked Counter
  listCounter++

  uncheckedCount++
  
  // Create list item
  let listItem = document.createElement('li')
  listItem.innerHTML = listCounter + ". " + todoItem + "  <button id=" + listCounter + ">check</button>"

  // Populate list
  list.appendChild(listItem)

  // Grab li by id, set attribute
  listItem.setAttribute("id", todoItem)

  // Grab button by id, set attribute
  document.getElementById(listCounter).setAttribute("onClick", "buttonFunction(this.id)")

   // uncheckedCount
   uncheckedCountSpan.innerHTML = uncheckedCount

  // Keep track of number of items on list
  itemCountSpan.innerHTML = listCounter

}

function buttonFunction(buttonID) {
    uncheckedCount--
    uncheckedCountSpan.innerHTML = uncheckedCount
    document.getElementById(buttonID).onclick = null
}

