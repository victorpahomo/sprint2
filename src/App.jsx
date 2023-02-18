import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-6xl text-yellow-700'>To do app</h1>
    </div>
  )
}

export default App
