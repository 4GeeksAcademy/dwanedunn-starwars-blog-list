import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">STARWARS</span>
        </Link>
        <div className="ml-auto">
          {/* <Link to="/"> */}
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button">
              Favorites 1
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};
