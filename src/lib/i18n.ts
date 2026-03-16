export type Locale = "es" | "en" | "pt" | "fr" | "de";

export const defaultLocale: Locale = "es";

export const locales: Locale[] = ["es", "en", "pt", "fr", "de"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
};
