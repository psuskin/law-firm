"use client";

import { Suspense } from "react";
import GoogleAnalytics from "./GoogleAnalytics";

function GoogleAnalyticsInner() {
  return <GoogleAnalytics />;
}

export default function GoogleAnalyticsWrapper() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  );
}
