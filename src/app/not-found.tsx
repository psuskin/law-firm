import Link from "next/link";
import { useTranslations } from "next-intl";    

export default function RootNotFound() {
  const t = useTranslations("not-found");
  return (
    <div className="min-h-screen flex items-center justify-center bg-law-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mt-2 text-3xl font-semibold text-primary-800">
          Seite nicht gefunden
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-600 transition duration-300"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
