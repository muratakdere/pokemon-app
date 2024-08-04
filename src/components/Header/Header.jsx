import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pokedex</a>
        </li>
        <li>
          <a href="#">Video Games & App</a>
        </li>
        <li>
          <a href="#">Trading Card Game</a>
        </li>
        <li>
          <a href="#">Animation</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
