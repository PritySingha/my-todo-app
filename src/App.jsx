import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
      <div >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
  )
}

export default App
