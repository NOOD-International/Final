export const locales = ["en", "ar", "fr", "ur", "ru", "zh"] as const;
export type AppLocale = typeof locales[number];
export const defaultLocale: AppLocale = "en";

export const rtlLocales: AppLocale[] = ["ar", "ur"];
export const isRTL = (l: string) => rtlLocales.includes(l as AppLocale);
