//(2). HTTP(hypertext transfer protocol): transfering large amount of text from one end to another. http works on your network layer.
//http is also a default module

let http = require('http');
let fs = require('fs');  //this will help you call your files into the http create function so it can display
//steps: you require, you create the server and do a call back function passing in variable or parameter for request and response just like below. The http is a request-response protocol meaning that you request for a thing, the server process it and sends you a response and the server will be telling the browser what it should be expecting that's where we use response.writeHead and we pass in the content type and the.
http.createServer(function(request, response){
    if(request.method == "GET"){
        if(request.url == "/"){
            response.writeHead(200, {'content-type': 'text/html'});
            let index = fs.readFileSync('index.html')
            // let content = '<h1>All is well</h1>';
            response.write(index);
            // response.write(content)
            response.end();
        }
        if(request.url == "/contact"){
            // response.
        }
    }
    if(request.method == "POST"){

    }
}).listen(5000) ;
console.log("App running on port http://localhost:5000");
//this listen help to specify the port number the particular app is suppose to run on. the rule is when you want to run, you do from 3000 - 5000 and you'll still heck well to know the numbers in between this 3000-5000 to run with eg if you have a react page running, you cant run your app on 3000 cos react runs on that.
//NOTE: there is no time you should create a server that does not respond back to something; ensure that there is something you are returning even if its an error, ensure to respond the error.
// assign: learn all the http error codes.

// 3 major things to note:
// Response.writeHead : the type of response that the user is expecting
// Resoponse.write: the process of writing something continously without you telling it where to stop this means that the browser keeps expecting more things from the server.
// Response.end: the process of writing something and telling it to stop.
// note that if you use response.write() and not use the response.end(), youll make the browser to just keep running and running expecting more content without ending. note: you can have more than one response.write() but you can only have one response.end().

// assignment: design home page and one more of worldmarket.com site.