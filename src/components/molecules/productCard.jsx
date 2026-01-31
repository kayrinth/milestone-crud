import { Card, CardContent, CardFooter } from "@/components/atoms/card";

export default function ProductCard({ product }) {
  return (
    <Card className="h-full transition hover:shadow-md">
      <CardContent className="p-4">
        <div className="mb-4 flex h-40 items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

        <h3 className="line-clamp-2 text-sm font-medium">{product.title}</h3>

        <p className="mt-2 text-lg font-semibold">${product.price}</p>

        <p className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 inline-block px-2 py-1 rounded-md mt-2">
          {product.category}
        </p>
      </CardContent>
    </Card>
  );
}
