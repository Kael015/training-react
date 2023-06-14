import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"

function App() {
  const [count, setCount] = useState(0)
  
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  function toggleSideMenu() {
    const hamburger = document.getElementById("humbergerButton")
    hamburger.classList.toggle("hamburger-active")
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <>
      <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className='flex flex-col flex-1 w-full'>
        <Header toggleSideMenu={toggleSideMenu} />
        <div className='px-6 mx-auto'>
          <h1>Dahsboard</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
