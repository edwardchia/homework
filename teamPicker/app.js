const express = require("express"); //require express
const logger = require("morgan"); // add logging middleware
const app = express(); // create app
app.use(logger('dev')); // U can now see the GET request on terminal
app.set('view engine', 'ejs'); //no need to type template name followed by ejs now with this line of code.
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("welcome") // no longer need .ejs at end of welcome
});

// app.get("/cohorts", (req, res) => {
//     res.render("cohorts")
// });

// app.get("/new_cohorts", (req, res) => {
//     res.render("new_cohorts")
// });

// app.post("/cohorts/new", (req, res) => {
//     const logourl = req.body.url
//     const members = req.body.members
//     const name = req.body.name
//     // console.log(name, logourl, members)
//     res.render("cohorts")
// });

const cohortsRouter = require("./routes/cohortsRouter");
app.use("/cohorts", cohortsRouter);


//Server 
const PORT = 8899;
const HOST = 'localhost'; // 127.0.0.1
app.listen(PORT, HOST, () => {
	console.log(`Server is listening at http://${HOST}:${PORT}`);
});