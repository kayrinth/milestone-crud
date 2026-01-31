import { axios } from "@/api/axios";

export const getProducts = async () => {
  const res = await axios.get("/products");
  console.log(res.data);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post("/products", data);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`/products/${id}`);
  return res.data;
};
