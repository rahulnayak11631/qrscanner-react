import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRScanner from './QRScanner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QRScanner/>
    </>
  )
}

export default App
