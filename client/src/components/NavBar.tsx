import { Link } from "react-router-dom";

export const NavBar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/create-character">Create Character</Link>
  </div>
);
