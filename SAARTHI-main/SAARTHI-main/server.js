const express = require('express');

const cors = require('cors');

const app = express();
const fs=require('fs');

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.get('/api',(req,res)=>{
  const data = fs.readFileSync(`${__dirname}/server/userApi/userApi.json`, "utf-8");
  const orgdata = JSON.parse(data);
  res.send(orgdata);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let books = [];



app.post('/create', function(req, res) {
  const newBook = {
    Name: req.body.name,
    Email: req.body.email,
    Subject: req.body.subject,
    Message: req.body.message,
  };

  books.push(newBook);
  console.log(books);
});

app.get('/data', function(req, res) {
//   console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
//   console.log('Books : ', JSON.stringify(books));
  res.end(JSON.stringify(books));
});

//start your server on port 3001
app.listen(8001, () => {
  console.log('Server Listening on port 8001');
});