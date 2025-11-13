import { useForm, type FieldValues } from "react-hook-form";
import SocialMediaForm from "../../components/SocialMediaForm/SocialMediaForm";

export default function SocialMediaUpdate() {
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "Social media",
      slug: "social-media",
    },
  });
  return (
    <section id="social-media-update">
      <SocialMediaForm form={form} />
    </section>
  );
}
