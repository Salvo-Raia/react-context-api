import axios from "axios";
import { useState, useEffect } from "react";
import { useBudget } from "../contexts/BudgetContext";
import { Link } from "react-router-dom";

const fakeStoreProducts = "https://fakestoreapi.com/products";

export default function ProductsPage() {
  const { budgetMode, setBudgetMode } = useBudget();
  console.log(budgetMode);
  const [fakeProducts, setFakeProducts] = useState([]);
  const fetchProducts = () => {
    axios.get(fakeStoreProducts).then((res) => {
      console.log(res.data);

      if (budgetMode === true) {
        setFakeProducts(res.data.filter((product) => product.price <= 30));
      } else {
        setFakeProducts(res.data);
      }
    });
  };

  useEffect(fetchProducts, [budgetMode]);

  return (
    <>
      <div className="row row-cols-4 g-4 my-4">
        {fakeProducts.map((product) => {
          return (
            <div key={product.id} className="col">
              <Link
                to={"/products/" + product.id}
                className="text-decoration-none"
              >
                <div className="card h-100 d-flex flex-column p-3">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt={product.title}
                    title={product.title}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4>{product.title}</h4>
                      <p className="text-secondary">{product.category}</p>
                    </div>
                    <p className="card-text">
                      {product.description.slice(0, 50) + "..."}
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="d-block fw-bold">
                        {product.price}
                        <span>$</span>
                      </p>
                      <p className="d-block">
                        <strong className="pe-2 fw-bold">
                          <i className="bi bi-star-fill"></i>
                        </strong>
                        {product.rating.rate}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
