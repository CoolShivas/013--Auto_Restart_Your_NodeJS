const http = require('http');


const urlServer = http.createServer((request, response) => {
    // // // Always keep in mind about this (response, request).
    // // // In this the response is first then request is the wrong way and the url i.e., localhost:4000 is not going to work. So, always keep thee request first then response. The correct order is (request, response);
    if(request.url === "/")
    {
        response.setHeader("Content-Type", "text/plain");
        response.write("Welcome to the Web-Server using Node.js.");
        response.end();
    }
    if(request.url === "/contact")
    {
        response.setHeader("Content-Type", "text/html");
        response.write("<center> Feel free to contact us 24*7. <center/>");
        response.end();
    }
    // // // Here, the new page added i.e., "/contact" and saved but on localhost:5000/contact is not showing and buffering is going on.
    // // // It is happening because of PORT is not refresh and not showing the updated page i.e., "/contact". So, everytime save the code first and then open the Terminal then press ctrl C to stop the previous code/program. And, again restart it. You will get the result.
    if(request.url === "/about")
        {
            response.setHeader("Content-Type", "text/html");
            response.write("<textarea> Welcome to about page. Do you want to know more about us. Then, we will not discuss. <textarea/>");
            response.end();
        }
});


const PORT = 5000;

urlServer.listen(PORT, () => {
    console.log(`Listening to Port, ${PORT}`);
});


// // // // Here, we are getting the Output on Terminal as :-
// // // // Listening to Port, 5000
// // // // Whereas, on Desktop enter the url localhost:5000 
// // // // Therefore, on Desktop we are able to see the Output as :- 
// // // // Welcome to the Web-Server using Node.js.
// // // // Now, enter the url localhost:5000/contact 
// // // // Therefore, on Desktop we are able to see the Output as :- 
// // // // Feel free to contact us.


// // // // Finally, after the installation of Nodemon and also globally install. So, we are able to update data on real time without running again and again node serverURL.js to ckeck the reflected updates on the Browser. 

// // // // After installation then open the terminal and write the command ctrl + C to stop the previous server (i.e., node serverURL.js) and now use nodemon serverURL.js it will show the Output as :-
/*
// [nodemon] 3.1.9
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node serverURL.js`
// Listening to Port, 5000
*/

// // // // Now, on every update there in no need of this command node serverURL.js again and again. 
// // // // Therefore, Nodemon automatically update the server or PORT to restart after any update is save.