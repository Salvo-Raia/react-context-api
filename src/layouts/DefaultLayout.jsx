import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="jumbo d-flex flex-column justify-content-center">
        <h2>Welcome to FakeStore!</h2>
        <p>
          Where ideas turn into products you can trust. We focus on simplicity,
          quality, and a seamless shopping experience. Browse freely, explore
          our collection, and discover items designed to make everyday life
          better. Your next favorite product might be just one click away.
        </p>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
