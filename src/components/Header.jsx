import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-success ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="public\logo.png"
              alt="FakeStore logo"
              title="FakeStore logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-white">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
              <NavLink to="/about-us" className="nav-link">
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
