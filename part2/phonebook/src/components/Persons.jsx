import Person from './Person'

const Persons = ({persons}) => {
    return (
        persons.map(person => {
            return <Person key={person.id} person={person}/>
        })
    )
}

export default Persons