const express = require("express");
const path = require("path");

const app = express();


const PORT = process.env.PORT|| 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = [
    {
        reservations: [],
        waitlist: []
    }
]

app.get("/", function(req,res){
    res.sendFile(path.join(_dirname,"view.html"));
})

app.get("/add",function(req,res){
    res.sendFile(path.join(_dirname,"add.html"))
})
app.get("/api/waitlist",function(req,res){
    res.json(data.waitlist)
})
app.get("/api/tables",function(req,res){
    res.json(data.reservations)
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})