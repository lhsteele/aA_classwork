import React from 'react';
import { requestPokemon } from "../../actions/pokemon_actions";


class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.pokemonId
    this.props.requestPokemon(id);

  }

  render() {
    const { pokemon, items } = this.props;

    return (
      <span>
        <ul>
          <li>
            {pokemon.name}
          </li>
        </ul>
      </span>
    )
  }
  
}

export default PokemonDetail;

// const { pokemon, items, loading } = this.props;

// if (loading) {
//   return <section className="pokemon-detail"><LoadingIcon /></section>;
// }

// if (!pokemon) return null;

// return (
//   <section className="pokemon-detail">
//     <figure>
//       <img src={pokemon.image_url} alt={pokemon.name} />
//     </figure>
//     <ul>
//       <li>
//         <h2>{pokemon.name}</h2>
//       </li>
//       <li>Type: {pokemon.poke_type}</li>
//       <li>Attack: {pokemon.attack}</li>
//       <li>Defense: {pokemon.defense}</li>
//       <li>Moves: {pokemon.moves.join(', ')}</li>
//     </ul>
//     <section className="toys">
//       <h3>Items</h3>
//       <ul className="toy-list">
//         {items.map(item => <Item key={item.name} item={item} />)}
//       </ul>
//     </section>

//     <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
//   </section>