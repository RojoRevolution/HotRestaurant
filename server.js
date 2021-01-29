const express = require("express");
const path = require("path");

const app = express();


const PORT = process.env.PORT|| 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Our data for reservations and waitlist

const data = [
    {
        reservations: [],
        waitlist: []
    }
]

// Express routing for our pages and api
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


// Posts new reservation requests to /api/new
// tableData must exist as well as the name of the reservation
// If less than 5 reservations currently exists then tableData is then pushed to reservations
// If more than 5 reservations currently exists then tableData is then pushed to waitlist 
app.post("/api/new", function(req,res){
    var tableData = req.body;
    console.log(tableData)
    if (tableData && tableData.name){
        tableData.routeName = tableData.name
    }
    console.log(tableData)
    if (data.reservations.length < 5){
        data.reservations.push(tableData);
    }
    else{
        data.waitlist.push(tableData)
    }
})




app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})