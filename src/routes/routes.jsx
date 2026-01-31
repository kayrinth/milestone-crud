import { createBrowserRouter } from "react-router-dom";
import ProductPage from "@/pages/productPage";
import EditProductPage from "@/pages/editProductPage";
import AddProductPage from "@/pages/addProductPage";

export const router = createBrowserRouter([
  { path: "/", element: <ProductPage /> },
  { path: "/edit/:id", element: <EditProductPage /> },
  { path: "/add-product", element: <AddProductPage /> },
]);
