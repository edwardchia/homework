const express = require("express");
const router = express.Router();
const knex = require("../db/client")


router.get("/", (req, res) => {
    knex("cohorts")
    .orderBy("createdAt", "desc")
    .then(cohorts => {
        res.render("cohorts/index", { cohorts: cohorts })
    })
    
});

router.get("/new", (req, res) => {
    res.render("cohorts/new")
    // res.send("i am the new cohorts")
});



router.post("/", (req, res) => {
   const newCohort = req.body;
   knex("cohorts")
    .insert(newCohort)
    .returning("*")
    .then(cohorts => {
        console.log(cohorts)
        const [cohort] = cohorts;
        res.redirect(`/cohorts/${cohort.id}`);
    })
});    

router.get("/:id", (req, res) => {
    const id = req.params.id
    knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {
        if(cohort){
            res.render("cohorts/show", { cohort: cohort })
        } else {
            res.redirect("/cohorts")
        }
        
    })
});
    










module.exports = router;