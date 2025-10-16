import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [count, setCount] = useState(true)
function my(){
  setCount(!count);
}
  return (
      <div className="card">
        <button onDoubleClick={my}>
          Like {count ? "🤍" : "❤️"}
        </button>
       </div>
  );
}


export default App
