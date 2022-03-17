const supportedLocales = [
  'en',
  'de'
];

function getBrowserLocale(options = {}): string {
    const defaultOptions = { countryCodeOnly: false }
    const opt = { ...defaultOptions, ...options }
    const navigatorLocale =
      navigator.languages !== undefined
        ? navigator.languages[0]
        : navigator.language
    if (!navigatorLocale) {
      return ''
    }
    const trimmedLocale = opt.countryCodeOnly
      ? navigatorLocale.trim().split(/-|_/)[0]
      : navigatorLocale.trim()
    return trimmedLocale
}

function supportedLocalesInclude(locale: string): boolean {
  return supportedLocales.includes(locale);
}

export {
  getBrowserLocale,
  supportedLocalesInclude
}
