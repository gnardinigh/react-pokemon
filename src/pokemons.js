import React from 'react'
import Pokemon from './pokemon'

export default function Pokemons({pokemons}) {
    return (<div id="pokemon-container">
        <div>
            {pokemons.map(pokemonObj=><Pokemon key={pokemonObj.name} data={pokemonObj} />)}
        </div>
    </div>)
}