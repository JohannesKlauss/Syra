import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useListenForLocaleChange() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    console.log("change to locale", locale);
    i18n.changeLanguage(locale);
  }, [locale]);
}