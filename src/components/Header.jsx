import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

export default function Header() {
  const { budgetMode, setBudgetMode } = useBudget();
  console.log(budgetMode);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-success ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/logo.png" alt="FakeStore logo" title="FakeStore logo" />
          </NavLink>

          <div className="navbar-nav d-flex flex-column align-items-end">
            <div className="d-flex">
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
            <div>
              <button
                className={
                  budgetMode === false ? "btn btn-warning" : "btn btn-danger"
                }
                onClick={() => setBudgetMode((prev) => !prev)}
              >
                {budgetMode === false
                  ? "Attiva Budget Mode"
                  : "Disattiva Budget Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
