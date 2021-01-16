import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useRoute from "../hooks/useRoute.js";
import styles from "./styles.js";

function Nav({ setMenu }) {
  const route = useRoute();
  const { pathname } = useLocation();

  function handleMenu() {
    setMenu(false);
  }

  useEffect(() => {
    handleMenu();
  }, [pathname]);

  return (
    <div className={[styles, route].join(" ")}>
      <div className="nav-content">
        <div className="app-title">Battle of Champions</div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={route === "dashboard" ? "active" : ""}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/sparta" className={route === "sparta" ? "active" : ""}>
                Sparta
              </Link>
            </li>
            <li>
              <Link to="/argos" className={route === "argos" ? "active" : ""}>
                Argos
              </Link>
            </li>
            <li>
              <Link to="/about" className={route === "about" ? "active" : ""}>
                About
              </Link>
            </li>
          </ul>
          <a tabIndex="0" className="cancel" onClick={handleMenu}>
            <span className="material-icons">cancel</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
