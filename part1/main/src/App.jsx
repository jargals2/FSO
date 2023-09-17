import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {

  const name="Peter"
  const age = 10
  const friends = [ 'Peter', 'Maya']
  return (
    <>
      <p> Greetings</p>
      <Hello name="Maya" age={26 + age}/>
      <Hello name={name} age={age}/>
      <p>{friends}</p>
    </>
  )
}

export default App
