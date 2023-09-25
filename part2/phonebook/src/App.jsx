import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: "123123", id: 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    let value = event.target.value
    let tempFiltered = persons.filter(person => person.name.toLowerCase().startsWith(value.toLowerCase()))
    setFilter(event.target.value)
    setFilteredPersons(tempFiltered)
  }


  const addName = (event) => {
    event.preventDefault()
    let personExists = persons.some(person => person.name === newName)
    if(personExists){
      alert(`${newName} is already added to phonebook`)
    }else{
      let newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
      console.log(newPerson)
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
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

      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addNam={addName}/>
      <h2>Numbers</h2>
      <ul>
        {
          filter ?
          <Persons persons={filteredPersons}/>:
          <Persons persons={persons}/>
        }
      </ul>
    </div>
  )
}

export default App