const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    if(isNaN(req.body.num1)){
        return res.json({
            "status": "Failure"
        })
    }
    let sum = Number(req.body.num1) + Number(req.body.num2);
    res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the sum of given two numbers ${sum}`
    }
    )
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;