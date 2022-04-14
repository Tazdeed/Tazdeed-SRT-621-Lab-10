const mongoose = require('mongoose');
require("dotenv").config();
const uri = process.env.ATLAS_URI;
//console.log(uri);
mongoose.connect(uri, { useUnifiedTopology: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
})
const port = 3000,
    homeController = require("./controllers/home_controller"),
    express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/home", homeController.sendReqParam);
app.get("/books/:book", homeController.respondWithImage);
app.get("/style", homeController.sendReqCss);

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
})