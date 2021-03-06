import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './pokemon';

function PokemonList({ filter, pokemons }) {
  /* console.log(pokemons);*/
  return (
    <div className="pokemons flex flex-wrap mt-10 ml-5 justify-center">
      {pokemons.map((pokemon, index) => {
        return <Pokemon filter={filter} key={index} url={pokemon.url} />;
      })}
    </div>
  );
}

PokemonList.propTypes = {
  filter: PropTypes.string,
  pokemons: PropTypes.array,
};
export default PokemonList;
