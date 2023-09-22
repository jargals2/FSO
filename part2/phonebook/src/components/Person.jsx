const Person = ({person}) => {
    let {name, number} = person

    return (
        <p>{name} {number}</p>
    )
}

export default Person