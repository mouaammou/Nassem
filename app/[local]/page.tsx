import { useTranslations } from "next-intl";

export default function Home() {
  
  const t = useTranslations()

  return (
    <h1>hello , i will make this website in week:: {t("hello")}</h1>
  );
}
