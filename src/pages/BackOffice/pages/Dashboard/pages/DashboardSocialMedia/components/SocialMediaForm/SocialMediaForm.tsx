import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import { Button } from "@/components/shadcdn/ui/button";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";

interface SocialMediaFormProps {
  form?: UseFormReturn<FieldValues, any, FieldValues>;
}

export default function SocialMediaForm({ form }: SocialMediaFormProps) {
  const formValue = form || useForm();

  return (
    <FormWrapper form={formValue} className="airdrop-form">
      <InputField
        form={formValue}
        placeholder="Nom..."
        label="Nom"
        name="name"
      />
      <InputField
        form={formValue}
        placeholder="slug-name..."
        label="Slug"
        name="slug"
      />
      <InputField form={formValue} label="Image" name="image" type="file" />
      <Button type="submit">Créer</Button>
    </FormWrapper>
  );
}
