const request = require('request');
const fs = require('fs');

const input = process.argv.splice(2)
const URL = input[0]
const filePath = input[1]


const stats = fs.statSync(filePath);
// const fileSizeInBytes = stats.size;



request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body: ')

  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
    let bytes = body.length
    console.log(`downloaded and saved ${bytes} bytes to ${filePath}`);
  });
  // fs.writeFile(input[1], body ,function(error){
  //   if(!error){
  //     RunFile();
  //   }
  // })
   // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});