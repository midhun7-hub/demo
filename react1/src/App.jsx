import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import State from "./hooks/State";
import Parent from "./components/Parent";
import Form from './hooks/Form';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Services from './pages/Services';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App(){
//   const [count, setCount] = useState(true)
// function my(){
//   setCount(!count);
// }
//   return (
//       <div className="card">
//         <button onDoubleClick={my}>
//           Like {count ? "🤍" : "❤️"}
//         </button>
//        </div>
//   );
// }


// export default App
