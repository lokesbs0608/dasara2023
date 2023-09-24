import LayoutComponent from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "../components/languageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </LanguageProvider>
  );
}
