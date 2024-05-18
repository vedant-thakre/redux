import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import List from './components/List'

function App() {

  return (
    <div>
     <h1>Learning Redux Toolkit</h1>
     <Add/>
     <List/>
    </div>
  )
}

export default App
