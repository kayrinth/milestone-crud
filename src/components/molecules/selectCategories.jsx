import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Field, FieldLabel } from "@/components/atoms/field";

export function SelectCategories({ value, onChange, className }) {
  return (
    <Field>
      <FieldLabel>Categories</FieldLabel>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-full ${className}`}>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>

            <SelectItem value="all">All</SelectItem>
            <SelectItem value="men's clothing">Men's Clothing</SelectItem>
            <SelectItem value="women's clothing">Women's Clothing</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="jewelery">Jewelery</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
