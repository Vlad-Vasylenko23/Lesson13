// const http = require('http')

// const host = '0.0.0.0'
// const port = 8000

// const server = http.createServer(function (req, res) {
//   res.writeHead(200)
//   res.end('Hello')
// })

// server.listen(port, host, function () {
//   console.log('Server is listening on port ' + port)
  
// })

// const fs = require('fs')
// const readline = require('readline')
  
// function countWords(st) { 
//   return st.trim().split(/\s+/).length
// } 
 
// const Stream = fs.createReadStream("Lection5.txt")
// const rl = readline.createInterface({ 
//   input: Stream, 
//   output: process.stdout, 
//   terminal: false 
// })
// const http = require('http')

// const host = '0.0.0.0'
// const port = 8000

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type':'text/html'})
//   res.end('<html><body>Hello</body></html>')
// })

// server.listen(port, host, function () {
//   console.log('Server is listening on port ' + port)
  
// })



// const http = require('http');
// const fs = require('fs');

// const host = '0.0.0.0';
// const port = 8000;

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

  
//   fs.readFile('Lection5.txt', 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end('Error reading the file');
//       return;
//     }

    
//     res.end(data);
//   });
// });

// server.listen(port, host, function () {
//   console.log('Server is listening on port ' + port);
// });


const http = require('http')
const fs = require('fs')

const host = '0.0.0.0'
const port = 8000

const server = http.createServer(function (req, res) {
  
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

  
  fs.readFile('Lection5.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      res.end('Error reading the file')
      return
    }

   
    res.end(data)
  })
})

server.listen(port, host, function () {
  console.log('Server is listening on port ' + port)
})
