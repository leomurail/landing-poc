import { useForm, type FieldValues } from "react-hook-form";
import CategoryForm from "../../components/CategoryForm/CategoryForm";

export default function CategoryUpdate() {
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "Category",
      slug: "category",
    },
  });
  return (
    <section id="category-update">
      <CategoryForm form={form} />
    </section>
  );
}
