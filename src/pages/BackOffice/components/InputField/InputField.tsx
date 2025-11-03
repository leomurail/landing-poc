import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/shadcdn/ui/form";
import { Input } from "@/components/shadcdn/ui/input";
import type { FieldValues, UseFormReturn, Path } from "react-hook-form";

interface FormFieldProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  placeholder?: string;
  label?: string;
  name: Path<TFieldValues>;
  type?: React.HTMLInputTypeAttribute;
}

export default function InputField<TFieldValues extends FieldValues>({
  placeholder = "",
  label = "",
  form,
  name,
  type = "text",
}: FormFieldProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
