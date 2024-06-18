const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const contactRouter = require("./routes/contactRoute");
const errorHandler = require("./middleware/errorHandler");

app = express();
// Middleware to Parse JSON data
app.use(express.json());
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/contacts", contactRouter);
console.log("A change made in feature/Dev1 branch")
