const request = require("request");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = process.argv.splice(2);
const URL = input[0];
const filePath = input[1];

request(URL, (error, response, body) => {
  const writeFile = () => {
    fs.writeFile(filePath, body, err => {
      if (err) throw err;
      let bytes = body.length;
      console.log(`downloaded and saved ${bytes} bytes to ${filePath}`);
    });
  };

  if (fs.existsSync(filePath)) {
    rl.question("do you want to over y/n?",
      answer => {
        rl.close();
        if (answer === "y") {
          writeFile();
        } else {
          console.log("error");
        }
      });
  }else writeFile();
});
