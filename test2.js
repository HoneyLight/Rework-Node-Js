let addition = require('./test')
let fs = require('fs')

console.log(addition(3,5))

// FILE SYSTEM MODULE:
// synchronous and asynchronous module
// eg readFile, readFileSync
// eg writeFile, writeFileSync
// eg exists, existsSync

// the ones with Sync do not require callbacks while the ones without do.

// lets practice with writeFile
// let content = "All is well that ends well";
// fs.writeFileSync('myprecious.txt',content) //it takes in 3 argument (1 is the name of the file, 2nd is the content while the 3rd is the encoding. but in the case of .txt, it has a default encoding already so you don't need to pass in the argument but for others you'll have to.)
// console.log('Done')

// lets practice readfile: 
let text = fs.readFileSync('myprecious.txt') //this is to read the content of the file and you are passing only one argument.
console.log(text+ "")

// when you execute the writefile, creates the file and writes the content for you then you use the readfile to read the content inside he file
