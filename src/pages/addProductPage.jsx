import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Textarea } from "@/components/atoms/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { SelectCategories } from "../components/molecules/selectCategories";
import { createProduct } from "@/api/products.api";
import { CircleArrowLeft } from "lucide-react";

export default function AddProductPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    rate: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setForm((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        rating: { rate: 4.5, count: 100 },
        title: form.title,
        price: Number(form.price),
        description: form.description,
        category: form.category,
        image: preview,
      };

      const createdProduct = await createProduct(payload);

      const localProduct = {
        ...payload,
        id: createdProduct.id,
        __source: "local",
      };
      sessionStorage.setItem("add-product", JSON.stringify(localProduct));
      navigate(-1);
    } catch (error) {
      console.error("Failed to create product", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2 flex items-center gap-4 mb-4">
          <button onClick={handleBack} variant="link" className="p-0">
            <CircleArrowLeft size={30} />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Add Product
            </h1>
            <p className="text-sm text-slate-500">
              Fill in the details below to add a new product to your catalog.
            </p>
          </div>
        </div>
        <Card className="border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              Product Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                <div className="space-y-2">
                  <Label className="text-base font-semibold text-slate-700">
                    Product Image
                  </Label>
                  <div className="relative flex h-72  w-full items-center justify-center rounded-lg border-2 bg-white hover:border-black transition-colors p-4">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-60 object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-2 h-12 w-12"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium">Upload Image</p>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <Button
                      type="button"
                      // variant="outline"
                      className="w-full"
                    >
                      Upload Image
                    </Button>
                  </div>
                </div>

                <div className="space-y-6 mt-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Product Name
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      className="border-2 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <SelectCategories
                      className="w-full border-2"
                      value={form.category}
                      onChange={(value) =>
                        setForm((prev) => ({ ...prev, category: value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="price"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Price
                    </Label>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black font-medium">
                        $
                      </span>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="0"
                        className="border-2 pl-5 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-semibold text-slate-700"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write a detailed description of your product, including features, benefits, and specifications..."
                  className="min-h-35 resize-y border-2 focus:border-blue-500 transition-colors"
                  rows={5}
                />
                <p className="text-xs text-slate-500">
                  A detailed description helps buyers understand your product
                </p>
              </div>
              <div className="border-t border-slate-200"></div>
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="border-2 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
