const express = require('express');
const app = express();
const port = 3000;
// Set up routes for home, login, registration, chat rooms, and user profiles.
app.get("/", (req, res)=>{
    res.status(200);
    res.send('Welcome to our chat application!');
})

app.post("/login", (req, res)=>{
    res.status(200);
    res.send("Welcome to login page");
})

app.post("/signup", (req, res)=>{
    res.status(200);
    res.send("Please Sign-up");
})

app.get("/chat-rooms", (req, res)=>{
    res.status(200);
    res.send("Welcome to chat-rooms page");
})

app.get("/user", (req, res)=>{
    res.status(200);
    res.send("Welcome to user page");
})

app.listen(port, ()=>{
    console.log(`your server is listening on port: ${port}`);
})