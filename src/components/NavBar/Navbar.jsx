import CartWidgetIcon from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {

  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">Tecnological</Link>
          </li>
        </h2>

        <li className="nav-item">
          <Link className="nav-link" to="/category/notebooks">
            Notebooks
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/videoCards">
            Placas de Video
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/processors">
            Procesadores
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/motherboards">
            Placas Madres
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/ram">
            Memorias
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/monitors">
            Monitores
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/storage">
            Almacenamiento
          </Link>
        </li>
        <Link to="/cart">
          <CartWidgetIcon />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;