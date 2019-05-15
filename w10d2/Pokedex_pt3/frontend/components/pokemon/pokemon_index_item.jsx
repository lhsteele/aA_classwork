import React from 'react';
import { Link, Route } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
  
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}
    </Link>
    <img src={pokemon.image_url}/>
  </li>
)

export default PokemonIndexItem