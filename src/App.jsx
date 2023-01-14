import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import logo from './images/icon-dice.svg'

function App() {
  // the api -->   https://api.adviceslip.com

  const [test , settest] = useState([]);
  const [count, setcount] = useState(0)

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      settest(res.data.slip);
    }).catch(() => {
      console.log('You have an err mouaad !!')
    })
  }, [count]);




  return (
    <div className="App">
      <div className="advice">
        <p>ADVICE #{ test.id }</p>
        <h1>{ test.advice}</h1>
        <div className='bar'>
          <nav></nav>
        </div>
        <img onClick={ () => {
          setcount(count + 1)
        }} src={ logo } alt="#" />
      </div>

      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://mouaad.dev">Laouar Mohamed Mouaad</a>.
  </div>
    </div>
  )
}

export default App
