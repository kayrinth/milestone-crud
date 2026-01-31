import { useEffect, useState } from "react";
import { getProducts } from "@/api/products.api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();

        // 1. merge EDIT
        const merged = res.map((product) => {
          const edited = sessionStorage.getItem(`edit-product-${product.id}`);
          return edited ? { ...product, ...JSON.parse(edited) } : product;
        });

        const added = sessionStorage.getItem("add-product");
        const finalProducts = added ? [...merged, JSON.parse(added)] : merged;

        setProducts(finalProducts);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (data) => {
    setProducts((prev) => [...prev, { ...data, id: Date.now() }]);
  };

  const updateProduct = (id, data) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p)),
    );
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    removeProduct,
  };
};
