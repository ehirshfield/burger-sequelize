var db = require("../models");

 module.exports = function(app){

    app.get("/", function(req, res){
      db.Burger.findAll({}).then(function(allBurgers){
        var hbsObject = {
          burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

    app.post("/", function(req, res){
      db.Burger.create({
        burger_name: req.body.name,
        devoured: false
      }).then(function(){
        res.redirect("/");
      });
    });
 }
