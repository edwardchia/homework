const express = require('express');
// const knex = require('../db/client');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET /Clucks!")
});


router.get("/new", (req, res) => {
    res.render("clucks/new");
});

// router.get("/new", (req, res) => {
//     res.render("clucks/sign_in");
// });





router.post("/", (res, req) => {
    const newCluck = req.body;
    knex('clucks')
		.insert(newCluck)
		.returning('*')
		.then(clucks => {
			const [cluck] = clucks;
			
			res.redirect(`/clucks/${cluck.id}`);
		});
});




module.exports = router;