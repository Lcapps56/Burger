var express = require("express")
var burger = require("../models/burger.js")

var router = express.Router()

router.get("/", function(req, res){
        burger.all(function(data){
        console.log("data")
        console.log(data)
        console.log("data")
        res.render("index", {burgers: data})
    })
})

router.post("/", function(req, res){
    console.log(req.body)
        if (req.body.devoured === "1"){
            req.body.devoured = true
        } else{
            req.body.devoured = false
        }
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(data){
        res.redirect("/")
})
})
router.put("/", function(req, res){
    console.log(req.body)
    var condition = "id = " + req.body.id;

    burger.update({devoured: true},condition, function(data){
        res.end()
    })
})

module.exports = router