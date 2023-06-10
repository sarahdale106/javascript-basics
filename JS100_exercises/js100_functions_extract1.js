// en_us.UTF_8

function extractLang(locale) {
  return locale.split('_')[0];
}
console.log(extractLang('en_us.UTF_8'));