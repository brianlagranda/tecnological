import { Link } from "react-router-dom";
import CartWidgetIcon from '../CartWidget/CartWidget';
import "../navbar/navbar.css";

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

        <CartWidgetIcon />
      </ul>
    </nav>
  );
}

export default NavBar;
