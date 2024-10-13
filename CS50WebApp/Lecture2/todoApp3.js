// store todos in memory
let todos = [] // store todos in memory, instead of just on HTML

function renderTodo(todo) { // renders a single todo into something a browser can display via HTML
    // render a single todo // RENDERING can refere to doing a single object or RENDERING the entire site
}

function render() { // renders the entire todos[] using .map and .forEach to append to list via list.appendchild
    // render the todos in memor to the page
    list.innerHTML = ''
    todos.map(rederTodo).forEach(todo => list.appendChild(todo))

    // update counts

    return false
}

function addTodo(name) {
    const todo = new Todo(name)
    todos.push(todo)
    return render()
}

// If we're storing everything in memory it becomes a lot easier to remove things
function removeTodo() {
    const todo = this.todoRef
    todos = todos.filter(t => t !== todo)
    return render()
}

/*
This is A LOT BETTER than todoApp0 where were handling EVERYTHING
imperatively, BUT we are still manually rendering, and there is room for improvement
i.e. if REACT actually handles rendering our data live to the screen
*/