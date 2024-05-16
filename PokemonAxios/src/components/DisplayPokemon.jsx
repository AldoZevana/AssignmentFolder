import React from "react"


const DisplayPokemon= props => {
    const { pokemon } = props
    console.log(pokemon)
    return(
        <div>
            <div>
            {    
                pokemon.map( (name, i)=> (
                    <p key={ i }>{ name }</p>
                ))
            }
            </div>
        </div>
    )

}

export default DisplayPokemon