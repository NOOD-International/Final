import { notFound } from "next/navigation"
import { locales } from "@/i18n/locales"

export default async function getMessages(locale: string) {
  if (!locales.includes(locale as any)) notFound()
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default
  return messages
}
