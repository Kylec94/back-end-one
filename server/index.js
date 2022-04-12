const express = require('express')
const cors = require('cors')

const app = express() //gives the entire object that is the application

app.use(cors()) //cross origin resource sharing. Lets Front and Back End work together.
app.use(express.json()) //parses any json into javascript

app.get("/api/users", (req, res) => { //app.get is retrieving info sent by client. 2 arguments - URL and (reqUEST, resPONSE). Returning the request of the client which it wants an array of names. Server gives varibale "friends" = [array of names]. Then gives a response status of 200 (ok) and .send the variable of friends.
    let friends = ["JIGGLY PUFF", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

//   app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    console.log(req.params)
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  }); 
  

app.listen(4000, () => console.log('server is running on port 4000')) //Listens for requests and auto fills first part of URL

