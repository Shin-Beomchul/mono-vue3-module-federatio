import { nextTick } from "vue";
import { createI18n, I18nOptions } from "vue-i18n";
import koMessages from "@/i18n/locales/ko.json";
export const SUPPORT_LOCALES = ["en", "ko"];

export function setupI18n(options: I18nOptions) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

/** 초기언어팩
 *  Module-federation Remote 언어패캐지 함께 로드
 * */
export async function setupI18nWithRemotes(options: I18nOptions) {
  await initI18nLanguage(options);
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}
/** 초기언어팩 */
export async function initI18nLanguage(options: I18nOptions) {
  const commKoOfRemote = await import("common/ko.json");

  options.messages = {
    ko: { ...koMessages, ...commKoOfRemote.commKo },
  };
}
/** 언어 세팅 */
export function setI18nLanguage(i18n: any, locale: any) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector("html")?.setAttribute("lang", locale);
}
/** 언어팩 변경 */
export async function loadLocaleMessages(i18n: any, locale: any) {
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `@/i18n/locales/${locale}.json`);
  //   const messagesOfComm = await import(
  //     /* webpackChunkName: "locale-[request]" */ `@god/comm-search/src/i18n/locales/${locale}.json`
  //   );
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, {
    ...messages.default,
    // ...messagesOfComm.default,
  });

  return nextTick();
}
/** 언어팩 변경 */
export async function loadLocaleMessagesWithRemotes(i18n: any, locale: any) {
  console.log("i18ni18ni18n", i18n);
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `@/i18n/locales/${locale}.json`);
  const commKoOfRemote = await import("common/ko.json");

  //   const text = `common/${locale}.json"`;
  //   const commKoOfRemote = await import(text);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, {
    ...messages.default,
    ...commKoOfRemote.commKo,
  });

  return nextTick();
}
