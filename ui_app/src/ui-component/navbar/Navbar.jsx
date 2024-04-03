import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("Email");
    navigate("/loginPage")
  }

  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ShopEazy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Wishlist</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
              <button className="btn ms-2" type="submit" onClick={handleLogOut}>
                LogOut
              </button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
