import { useEffect, useState } from 'react'
import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Node',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn Mongo',
      completed: false,
    },
    {
      id: 4,
      title: 'Learn Express',
      completed: false,
    }
  ])



  const [activeFilter, setActiveFilter] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
  }

  const handleSetComplete = (id) => {

    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })

    setTodos(updatedList);
  }

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos]);

  return (
    <div className='bg-gray-900 min-h-screen font-josefin h-full text-gray-100 flex items-center justify-center relative'>
      <div className='absolute top-0'>
        <img className=' w-full h-auto' src="https://github.com/victorpahomo/sprint2/blob/main/src/assets/img/bg-desktop-dark.jpg?raw=true" alt="" />
      </div>
      <div className='min-h-screen w-full flex items-center justify-center  py-20 px-5 z-10'>
        <div className='container flex flex-col max-w-xl'>
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete} />
        </div>

      </div>
    </div>
  );
}

export default App;
