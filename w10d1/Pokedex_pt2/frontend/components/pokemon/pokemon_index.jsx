class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon
  }

  render() {
    const pokemon = this.props.pokemon.forEach(poke => {
      <li key={poke.id}>
          {poke.name}
          <img src={poke.image_url} />
        </li>
        //  key={poke.id} name={poke.name} img={poke.image_url} />
        // <PokemonIndexImage key={poke.id} />
    });

    return (
      <ul>
        {pokemon}
      </ul>
    )
  }

}

export default PokemonIndex