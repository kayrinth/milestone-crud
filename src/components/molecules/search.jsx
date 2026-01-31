import { Button } from "@/components/atoms/button";
import { ButtonGroup } from "@/components/atoms/button-group";
import { Field, FieldLabel } from "@/components/atoms/field";
import { Input } from "@/components/atoms/input";

export function InputButtonGroup({ label, value, onChange }) {
  return (
    <Field>
      <FieldLabel htmlFor="search-input">{label}</FieldLabel>

      <ButtonGroup>
        <Input
          id="search-input"
          placeholder="Type to search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </ButtonGroup>
    </Field>
  );
}
