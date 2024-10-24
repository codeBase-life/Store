import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/store.jsx";
import App from "./App.jsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopNavbar from "./components/TopNavbar.jsx";
import LogIn from "./components/LogIn.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AddProducts from "./components/AddProducts.jsx";
import Products from "./components/Products.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import CartPayment from "./CartComponents/CartPayment.jsx";
import ThankYou from "./Thanks/ThankYou.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopNavbar />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        // path: "products",
        element: <Products />,
      },

      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/addproducts",
        element: <PrivateRoute element={<AddProducts />} />,
      },
      {
        path: "/cart",
        element: <CartPayment />,
      },
      {
        path: "/thanks",
        element: <ThankYou />,
      },

      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
