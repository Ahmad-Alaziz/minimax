import { TranslateOptions } from "i18n-js";
import { TxtKey, i18n } from "./i18n";

/**
 * Translates text.
 * @param {TxtKey} key - The i18n key.
 * @param {i18n.TranslateOptions} options - The i18n options.
 * @returns {string} - The translated text.
 * @example
 * Translations:
 *
 * ```en.ts
 * {
 *  "hello": "Hello, {{name}}!"
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { translate } from "i18n-js"
 *
 * translate("common.ok", { name: "world" })
 * // => "Hello world!"
 * ```
 */
export function translate(key: TxtKey, options?: TranslateOptions): string {
  return i18n.t(key, options);
}
