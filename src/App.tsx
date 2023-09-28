import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [item, setItem] = useState(0)

  return (
    <>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shopping list Calcator</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <h3>Add items to the list</h3>
        <input></input>
      </div>
    </>
    
  )
}

export default App
