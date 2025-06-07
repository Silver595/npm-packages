
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function kebabCase(str) {
  return str
    .replace(/\s+/g, '-')
    .replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
    .replace(/^-/, '')
    .toLowerCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function truncate(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

module.exports = {
  capitalize,
  camelCase,
  kebabCase,
  reverseString,
  truncate,
};
