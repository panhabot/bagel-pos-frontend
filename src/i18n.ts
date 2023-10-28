import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  format as formatDate,
  formatRelative,
  formatDistance,
  isDate,
} from "date-fns";
import { enUS as en, km, th, vi, ms, zhCN, fi } from "date-fns/locale";

const locales : {[key: string]: Locale} = {
  en: en,
  km,
  th,
  vi,
  ms,
  zhCN,
  fi,
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    detection: DETECTION_OPTIONS,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
      format: (value = "", format = "", lng = "km") => {
        if (isDate(value)) {
          const locale = locales[lng];
          if (format === "short") return formatDate(value, "P", { locale });
          if (format === "long") return formatDate(value, "PPPP", { locale });
          if (format === "relative")
            return formatRelative(value, new Date(), { locale });
          if (format === "ago")
            return formatDistance(value, new Date(), {
              locale,
              addSuffix: true,
            });

          return formatDate(value, format, { locale });
        }

        return value;
      },
    },
    react: {
      useSuspense: false, // fixes 'no fallback UI was specified' in react i18next when using hooks
    },
  });

export default i18n;
