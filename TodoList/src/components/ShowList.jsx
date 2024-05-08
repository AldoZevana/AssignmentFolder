import React from 'react'

const ShowList = ({stuff, setStuff}) => {

    const finishedTodo = (item) => {
        (item.complete) ? item.complete = false : item.complete = true; 
        setStuff([...stuff])
    }

    const deleteIt = val => {
        setStuff (stuff.filter( item => (item.item !== val)))
    }


    return (
        <ul>
            {
                stuff.map( (item, index) =>
                    <li key={index}>
                        {/* if i delete a checked item, it fills the checkbox in the item below. i think this needs to be controlleed but seems out of the scope of what i'm trying to do in this assignment. it's needs done and i'll have to come back */}
                        <input type="checkbox" onChange={(e) => finishedTodo(item)} />
                        <span>
                            {item.item}
                        </span>
                        <button onClick={ (e) => deleteIt(item.item)}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
}

export default ShowList