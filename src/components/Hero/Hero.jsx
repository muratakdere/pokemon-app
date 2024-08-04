import { CiSearch } from "react-icons/ci";
import "./Hero.css";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="left-side">
          <h1>Name or Number</h1>
          <input type="text" />
          <button type="submit">
            <CiSearch size={30} />
          </button>
          <p>
            Use the Advanced Search to explore Pokemon by type, weakness,
            Ability, and more
          </p>
        </div>
        <div className="right-side">
          <div className="content">
            <p>
              Search for a pokemon by name or using its National Pokedex number
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
