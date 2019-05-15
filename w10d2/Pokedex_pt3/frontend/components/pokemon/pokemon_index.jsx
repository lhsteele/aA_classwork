import React from 'react';
import ReactDOM from 'react-redux';
import PokemonIndexItem from './pokemon_index_item';
import { Link, Route } from 'react-router-dom';
import { requestAllPokemon } from '../../actions/pokemon_actions'
import PokemonDetailContainer from '../../components/pokemon/pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map(poke => {
        return (<PokemonIndexItem key={poke.id} pokemon={poke} />);
      });
      
    return (
      <span className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {pokemon}
        </ul>

      </span>
    )
  }
  
}

export default PokemonIndex