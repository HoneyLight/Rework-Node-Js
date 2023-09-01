// let addition = require('./test')
// let fs = require('fs')

// console.log(addition(3,5))

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
// let text = fs.readFileSync('myprecious.txt') //this is to read the content of the file and you are passing only one argument.
// console.log(text+ "")

// when you execute the writefile, creates the file and writes the content for you then you use the readfile to read the content inside he file


// 30/08/2023
// MODULES
// FS(file system), OS(operating system), crypto(for cryptography: encryption and decryption), DNS(domain name system), readline, http, and event.
//(1). OS : the os allow us to 
let os = require('os')
console.log(os.arch())
console.log(os.platform());
console.log(os.cpus()) //this show you the number of cpu
console.log(os.release())  //this show you the build number for our os
console.log(os.freemem()) //this show the free memory space
console.log(os.totalmem()) //this show you all the memory 
console.log(os.uptime()) //how long have your system been awake
console.log(os.EOL) //end of line
console.log("end")
console.log(os.networkInterfaces()) //this show the wifi informations and anything involving connectivity.

//(2). HTTP: transfering large amount of text from one end to another. http works on your network layer.