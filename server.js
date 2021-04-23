const express = require("express");
const control = require("./controllers/getResults.js")
const app = express();
const path = require('path');
let cors = require('cors');
app.use(cors())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());
app.use('/public', express.static(path.join(__dirname + '/static')))
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "static/index.html"));
  }); 
app.post('/res', control.getResults)
app.listen(4000, () => {
    console.log("Server is running on port 3000.");
});