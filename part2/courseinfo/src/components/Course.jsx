import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({course}) => {
    let {id, name, parts} = course
    //console.log(typeof(parts), parts)
    let total =parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
    return (
        <>
            <Header name={name}/>
            {parts.map(part =>  <Part key={part.id} part={part}/> )}
            <Total total={total}/>
        </>
    )
}

export default Course