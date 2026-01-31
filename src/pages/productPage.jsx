import { useState } from "react";
import Products from "@/components/organism/cardProduct";
import { InputButtonGroup } from "@/components/molecules/search";
import { SelectCategories } from "@/components/molecules/selectCategories";
import { Button } from "@/components/atoms/button";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-muted/40">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">Explore Our Products</h1>
              <p className="text-xl">Find the perfect product for your needs</p>
            </div>
            <Button>
              <Link to="/add-product">Add Product</Link>
            </Button>
          </div>
          <div className="mt-6 flex gap-4 ">
            <InputButtonGroup
              label="Search products"
              value={search}
              onChange={setSearch}
            />
            <SelectCategories
              value={category}
              onChange={setCategory}
              className="max-w-48"
            />
          </div>
        </div>
      </section>
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <Products category={category} search={search} />
        </div>
      </section>
    </div>
  );
}
