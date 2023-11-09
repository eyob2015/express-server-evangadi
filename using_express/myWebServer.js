const express = require("express");
const path = require("path");
const { random } = require("./randomNumber");

const app = express();
const port = 1234;

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send('<h1 style="color: blue;">Request received and processed</h1>');
});

app.get("/random", (req, res) => {
  const randomNumber = random();
  const styledRandomNumber = `<div style="background-color: #4caf50; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); text-align: center; font-size: 2em; color: white; font-weight: bold;">Random Number: ${randomNumber}</div>`;
  const linkToAbout =
    '<a href="/about" style="text-decoration: none; background-color: #0074d9; color: white; padding: 10px; margin: 10px; border-radius: 5px; display: inline-block;">Go to About</a>';
  res.send(styledRandomNumber + linkToAbout);
});

app.get("/about", (req, res) => {
  res.sendFile(
    path.join(__dirname, "static", "apple-html-css-replica", "about.html")
  );
});

app.get("/apple", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require("express");
// const app = express();

// app.use(express.static("static"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/static");
// });

// app.listen(1234, () => {
//   console.log("Server started on port 1234");
// });
/* server = http.createServer(function(req,res){

    console.log(`${req.url})`)

    if (req.url ==='/'){

        res.write('<h1>hello front page </h1>')
    }
    else if (req.url  ==='/home'){

        res.write('<h1>hello home page </h1>')
    }
    else if (req.url === '/about'){

        res.write('<h1>hello about page </h1>')
    }

    console.log('request receved')
    console.log(`${req}`)
    res.end('hello')
})
server.listen(1234,()=>{
    console.log('listening')
}) */
