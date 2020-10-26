const express = require("express")
const app = express()
const port = 3000

app.get("/", function(req, res){
    res.json({
        "Status": "Active"
    })
})

app.listen(port, function(){
    console.log(`Localhost: ${port}`)
})