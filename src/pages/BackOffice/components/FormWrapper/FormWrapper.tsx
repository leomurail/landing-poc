import { Form } from "@/components/shadcdn/ui/form";
import { type FieldValues, type UseFormReturn } from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit?: (data: any) => void;
  form: UseFormReturn<T, any, T>;
  className?: string;
}

export default function FormWrapper<T extends FieldValues>({
  children,
  onSubmit = () => {},
  form,
  className = "",
}: FormWrapperProps<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </Form>
  );
}
