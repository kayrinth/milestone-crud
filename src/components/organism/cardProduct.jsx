import ProductCard from "@/components/molecules/ProductCard";
import ProductModal from "../molecules/productModal";
import { useProducts } from "@/hooks/useProduct";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/atoms/dialog";
import ProductCardSkeleton from "@/components/molecules/productSkeleton";
import { Link } from "react-router-dom";
import { Button } from "../atoms/button";
import { useState } from "react";

export default function Products({ category, search }) {
  const { products, loading, removeProduct } = useProducts();
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  if (loading) {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "all" || product.category === category;

    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      sessionStorage.removeItem(`product-${id}`);
      removeProduct(id);
      setOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {filteredProducts.map((product) => (
        <Dialog key={product.id}>
          <DialogTrigger asChild>
            <div>
              <ProductCard product={product} />
            </div>
          </DialogTrigger>

          <DialogContent
            className="max-h-[90dvh] overflow-y-auto md:max-w-2xl "
            open={open}
          >
            <ProductModal product={product} />
            <DialogFooter>
              <Button
                variant="outline"
                className="bg-red-500 text-white hover:bg-red-600 hover:text-white w-full md:w-auto"
                onClick={() => handleDelete(product.id)}
                disabled={isDeleting}
              >
                Delete
              </Button>
              <Link to={`/edit/${product.id}`}>
                <Button variant="outline" className="w-full md:w-auto">
                  Edit Product
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
