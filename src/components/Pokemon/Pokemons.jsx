import { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import axios from "axios";
import "./Pokemons.css";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const pokemonsList = pokemons.map((pokemon) => (
    <PokemonItem key={pokemon.id} pokemon={pokemon} />
  ));

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => setPokemons(response.data.results));
    };

    getData();
  });

  return (
    <main className="pokemons-wrapper">
      <ul className="pokemons">{pokemonsList}</ul>
    </main>
  );
};

export default Pokemons;
