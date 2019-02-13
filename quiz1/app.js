const express = require("express");
const logger = require("morgan");
const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));


//below is the first route created
app.get("/", (req, res) => {
    res.render("welcome.ejs"); // change send to render, change welcome to welcome.ejs
});


const clucksRouter = require("./routes/clucksRouter");
app.use("/clucks", clucksRouter);












//Server 
const PORT = 9900;
const HOST = 'localhost'; // 127.0.0.1
app.listen(PORT, HOST, () => {
	console.log(`Server is listening at http://${HOST}:${PORT}`);
});