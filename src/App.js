import React, { Component } from 'react';
import './App.css';
import Form from './form'
import Image from './image'
import Pokemons from './pokemons'

class App extends Component {
  state = {
    searchTerm:'',
    pokemons: []
  }

  handleSearchTermChange = event => {
    this.setState({searchTerm:event.target.value},()=>this.pokemonsToDisplay())
  }

  pokemonsToDisplay = () => {
    return this.state.searchTerm ? this.filterPokemons() : []
  }

  filterPokemons = () => {
    return this.state.pokemons.filter(pokemonObj=>pokemonObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemons').then( r=>r.json() ).then( data=>{
      this.setState({pokemons:data},()=>console.log(this.state))
    } )
  } 

  render() {
    return (
      <React.Fragment>
        <Image />
        <Form handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.state.searchTerm}/>
        <Pokemons pokemons={this.pokemonsToDisplay()} />
      </React.Fragment>
    );
  }
}

export default App;
