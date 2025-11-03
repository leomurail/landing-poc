import { useForm } from "react-hook-form";
import { Form } from "@/components/shadcdn/ui/form";
import InputField from "@/pages/BackOffice/components/InputField/InputField";

import "./AirdropForm.css";
import SelectField from "@/pages/BackOffice/components/SelectField/SelectField";
import TextAreaField from "@/pages/BackOffice/components/TextAreaField/TextAreaField";
import { Button } from "@/components/shadcdn/ui/button";

export default function AirdropForm() {
  const form = useForm();
  const categoryOptions = [
    {
      value: "first",
      label: "first",
    },
    {
      value: "second",
      label: "second",
    },
    {
      value: "third",
      label: "third",
    },
    {
      value: "fourth",
      label: "fourth",
    },
  ];

  const statusOptions = [
    {
      value: "waiting",
      label: "En attente",
    },
    {
      value: "in_progress",
      label: "En cours",
    },
    {
      value: "to_claim",
      label: "À récupérer",
    },
    {
      value: "finished",
      label: "Terminé",
    },
  ];

  return (
    <Form {...form}>
      <form className="airdrop-form">
        <InputField form={form} placeholder="Nom..." label="Nom" name="name" />

        <SelectField
          label="Categorie"
          options={categoryOptions}
          name="category"
          placeholder="Pas de categorie"
          form={form}
        />

        <InputField
          form={form}
          placeholder="https://landing.page"
          label="Image"
          name="image"
          type="file"
        />

        <SelectField
          label="Statut"
          options={statusOptions}
          name="category"
          placeholder="Pas de statut"
          form={form}
        />

        <InputField
          form={form}
          placeholder="https://landing.page"
          label="Lien"
          name="link"
          type="url"
        />

        <TextAreaField
          form={form}
          name="text"
          label="Description"
          placeholder="Description..."
        />

        <Button type="submit">Sauvegarder</Button>
      </form>
    </Form>
  );
}
