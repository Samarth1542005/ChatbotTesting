import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
    .then((Response) => {
      setJoke(Response.data)
    })
    .catch((error) => {
      console.log("Error")
    })
  },[])
  return (
    <>
      <h1> Samarth Jagdish Raut </h1>
      <p> Jokes : {joke.length}</p>
      {
        joke.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
