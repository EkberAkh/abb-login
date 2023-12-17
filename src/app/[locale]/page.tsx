import { Layout } from "@/components/Layout";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common");
  return (
    <Layout>
      <h1>{t("actions.next")}</h1>
    </Layout>
  );
}
