import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card titulo={"Soy una prop"}/>
      <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  
    </div>
  )
}

export default App
