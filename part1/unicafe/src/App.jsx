import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{text==="positive"? value + "%" : value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let available = good + neutral + bad
  return available ? (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={good + neutral + bad}/>
          <StatisticLine text="average" value={(good*1 + neutral*0 + bad*(-1))/(good + neutral + bad)}/>
          <StatisticLine text="positive" value={good*100/(good+neutral+bad)}/>
        </tbody>
      </table>
    </>
    ) : <p>No feedback given</p>
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={()=> setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={()=> setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}
export default App
