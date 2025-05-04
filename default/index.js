function thankYouMessage() {
    console.log("This is my first NPM package. Thanks for using!");
  }
  
  module.exports = thankYouMessage;

//#!/usr/bin/env node
// This line allows the script to be run as a command line tool
// in Unix-like operating systems. It should be the first line of the file.
// It tells the system to use the Node.js interpreter to run this script.
// The above line is commented out because it is not needed for the package to work as a module.
//
console.log("This is my first NPM package. Thanks for using! ");  