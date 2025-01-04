import { unstable_setRequestLocale } from "next-intl/server";
import ImprintContent from "@/components/Imprint/ImprintContent";

export default function ImprintPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <ImprintContent />;
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }, { locale: "tr" }];
}
