function getId() {
  return Math.floor(Math.random() * 100000)
}

const constantTodos = [
  {
    id: getId(),
    name: 'shopping',
    complete: true,
  },
  {
    id: getId(),
    name: 'workout',
    complete: false,
  },
  {
    id: getId(),
    name: 'coding',
    complete: false,
  },
]

const TODO_ITEMS_KEY = 'todoItems'

function App() {
  const todoItemInputRef = React.useRef(null)
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem(TODO_ITEMS_KEY))
    return savedTodos || constantTodos
  })
  const [errorMessage, setErrorMessage] = React.useState('')

  React.useEffect(() => {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodoClick() {
    setErrorMessage('')
    const name = todoItemInputRef.current.value
    if (name === '') {
      setErrorMessage('Write something that you want to accomplish.')
      return
    }
    setTodos([
      ...todos,
      {
        id: getId(),
        name,
        complete: false,
      },
    ])
    todoItemInputRef.current.value = ''
  }

  function handleClearClick() {
    setErrorMessage('')
    if (!todos.find((todo) => todo.complete)) {
      setErrorMessage('No completed todos to be cleared from the list.')
      return
    }
    setTodos(todos.filter((todo) => !todo.complete))
  }

  function handleToggleTodoChange(id) {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        }
        return todo
      }),
    ])
  }

  return (
    <>
      <main>
        <h1>Todo List</h1>
        <section>
          <label htmlFor="new-todo-item">Would like to accomplish</label>
          <input id="new-todo-item" ref={todoItemInputRef} type="text" />
          <button class="primary" onClick={handleAddTodoClick}>
            Add todo
          </button>
          <button class="secondary" onClick={handleClearClick}>
            Clear list
          </button>
        </section>

        <section class="error-message">{errorMessage}</section>

        <section>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input
                id={`todo-item-${todo.id}`}
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleToggleTodoChange(todo.id)}
              />
              <label htmlFor={`todo-item-${todo.id}`}>{todo.name}</label>
            </div>
          ))}
        </section>
      </main>
      <hr />
      <footer>
        a{' '}
        <strong>
          <a href="https://szabi.space/">szabi.space</a>
        </strong>{' '}
        development
      </footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
