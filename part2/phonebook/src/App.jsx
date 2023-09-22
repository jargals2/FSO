import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])




  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleFilter = (event) => {
    let value = event.target.value
    let tempFiltered = persons.filter(person => person.name.toLowerCase().startsWith(value.toLowerCase()))
    setFilteredPersons(tempFiltered)
    setFilter(value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    let filteredArray = persons.some(person => person.name === newName)
    if(filteredArray) {
      alert(`${newName} is already added to phonebook`)
    }else{
      let person = {
        id: persons.length + 1,
        name: newName,
        number: newPhoneNumber
      }
      setPersons(persons.concat(person))
      setNewName('')
    }
  }




  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handleNumberChange}/>
          </div>
        <div>
          <button type="submit" onClick={ addPerson }>add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        {
        filter ? 
        <Persons persons={filteredPersons}/>
        :
        <Persons persons={persons}/>
        }
    </div>
  )
}

export default App