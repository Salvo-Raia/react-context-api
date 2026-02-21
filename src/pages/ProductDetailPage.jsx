import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const currentPageId = parseInt(id);
  const [loading, setLoading] = useState(true);
  const [productCard, setProductCard] = useState([]);
  const redirect = useNavigate();

  const fetchProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProductCard(res.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchProducts, [id]);

  if (!productCard) {
    redirect("/products");
  }

  if (loading) {
    return (
      <div className="spinner my-4">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only "></span>
        </div>
        <span className="ps-3 text-success">loading...</span>
      </div>
    );
  }

  return (
    <div className="detail-card row g-4 border rounded bg-light p-4 my-5">
      <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
        <img
          src={productCard.image}
          alt={productCard.title}
          className="img-fluid"
        />
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-between">
        <div>
          <h1>{productCard.title}</h1>
          <p className="text-muted my-3">{productCard.description}</p>
          <div className="d-flex justify-content-between align-items-center my-3">
            <p className="fw-bold fs-4">${productCard.price}</p>
            <p>
              <i className="bi bi-star-fill"></i> {productCard.rating?.rate} (
              {productCard.rating?.count} <span>reviews</span>)
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-success"
            onClick={() => redirect("/products/" + (currentPageId - 1))}
            disabled={currentPageId <= 1}
          >
            <i class="bi bi-arrow-left pe-2"></i>
            Articolo Precedente
          </button>
          <button className="btn btn-primary">
            <i class="bi bi-cart-plus pe-2"></i>Add to Cart
          </button>
          <button
            className="btn btn-success"
            onClick={() => redirect("/products/" + (currentPageId + 1))}
            disabled={currentPageId >= 20}
          >
            Prossimo articolo<i class="bi bi-arrow-right ps-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
