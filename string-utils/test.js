const utils = require('./index');

console.log(utils.capitalize("hello"));      // "Hello"
console.log(utils.camelCase("hello world")); // "helloWorld"
console.log(utils.kebabCase("Hello World")); // "hello-world"
console.log(utils.reverseString("hello"));   // "olleh"
console.log(utils.truncate("This is a long string", 10)); // "This is a ..."
