import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import TempGraph from './components/TempGraph';
import { Contents } from './components/Contents';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Contents />
    </div>
  )
}

export default App
