let http = require('http');
let fs = require('fs');
let axios = require('axios');

http.createServer(async (req, res) => {
    switch (req.url) {
        case '/css/bootstrap.min.css': 
            fs.readFile('css/bootstrap.min.css', 'utf8', (err, cssContents) => {
                res.write(cssContents);
                res.end();
            });
            break;
        default: 
            fs.readFile('index.html', 'utf8', async (err, fileContents) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // send html to browser
                    res.write(fileContents);

                    // make API call

                    //  - after writing the contents of index.html to the HTTP response, use the axios get method with the "await" keyword to make an API call to https://jsonplaceholder.typicode.com/todos/1 & store the result in a variable called apiData
                    let apiData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

                    // - write an <h2> tag to the HTTP response with the text "Sample API Data"
                    res.write('<h2>Sample API Data</h2>');

                    //   - write the apiData value to the HTTP response using the JSON.stringify() method
                    res.write(JSON.stringify(apiData.data));
                    
                    res.end();
                }
            });
    }   
}).listen(3000);