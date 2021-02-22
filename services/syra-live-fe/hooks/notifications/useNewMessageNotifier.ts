import useApiResToast from "../ui/useApiResToast";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useNewMessageNotifier() {
  const toast = useApiResToast();
  const { t } = useTranslation();

  useEffect(() => {
    let handler;

  }, []);
}