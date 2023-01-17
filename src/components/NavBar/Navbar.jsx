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
          <Link className="nav-link" to="/category/smartphones">
            PC
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/laptops">
            Notebooks
          </Link>
        </li>
        <CartWidgetIcon />
      </ul>
    </nav>
  );
}

export default NavBar;
