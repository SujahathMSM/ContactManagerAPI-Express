const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Listening on PORT 5000")
})

app.get("/contacts/api/v1", (req, res) => {
    res.status(200).json({messgae: "Welcome to the contacts API v1"})
})
