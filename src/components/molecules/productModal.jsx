import { Card, CardContent } from "@/components/atoms/card";

export default function ProductModal({ product }) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="space-y-6 p-0 ">
        <div className="flex justify-center rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-56 object-contain"
          />
        </div>
        <div className="space-y-4 px-1">
          <h3 className="text-lg font-semibold leading-snug">
            {product.title}
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {product.category}
            </span>
            <span className="text-muted-foreground">
              ⭐ {product.rating.rate} / 5
            </span>
          </div>
          <div className="text-2xl font-bold">${product.price}</div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Description</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
