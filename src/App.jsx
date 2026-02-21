import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BudgetProvider } from "./contexts/BudgetContext";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/about-us" Component={AboutPage} />
            <Route path="/products/:id" Component={ProductDetailPage} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}
