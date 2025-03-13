import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">Communion App</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
