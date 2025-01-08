const fs = require('fs');


// // used to write files with node, 1st create the file(message.txt), 2nd create the content(Hello from node JS) and 3rd a callback function to handle err or log in the console or run a fuction
// fs.writeFile('message.txt', 'Hello from node JS', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// fs.writeFile('slow.txt', 'Node here', (err)=>{
//   if (err) throw err;
//   console.log('this file has been saved');
  
// })

// // used to read files with node, 1st locate file path the file(slow.txt), 2nd decode the content to a particular format (utf8) and 3rd a callback function to handle err or read content in the log or run a fuction
fs.readFile('./slow.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 