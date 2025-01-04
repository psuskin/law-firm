import { unstable_setRequestLocale } from "next-intl/server";
import DataProtectionContent from "@/components/DataProtection/DataProtectionContent";
import { locales } from "@/config/i18n.config";

export default async function DataProtectionPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <DataProtectionContent />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
