import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const age=35;
  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
  <Card name="Nishant" myAge={age} />
  <Card name="Om" Image="https://images.pexels.com/photos/29656484/pexels-photo-29656484/free-photo-of-stylish-man-with-coffee-in-monochrome-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </>
  )
}

export default App
