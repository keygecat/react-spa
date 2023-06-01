import { Link } from "react-router-dom";

function Header() {

    return <nav className="orange lighten-2">
    <div className="nav-wrapper">
    <div className="container">
      <Link to="/" className="brand-logo center">
        SPA React Project
      </Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
}

export { Header };