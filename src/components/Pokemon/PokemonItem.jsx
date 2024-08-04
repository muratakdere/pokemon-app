import Card from "../UI/Card";
import "./PokemonItem.css";

const PokemonItem = ({ pokemon }) => {
  const { name, url } = pokemon;
  return (
    <Card>
      <img src={url} alt={name} />
      <h3 className="pokemon-title">{name}</h3>
    </Card>
  );
};

export default PokemonItem;
