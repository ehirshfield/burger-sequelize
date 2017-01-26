var db = require("../models");

 module.exports = function(app){

    app.get("/", function(req, res){
      db.burgers.findAll({}).then(function(allBurgers){

        var hbsObject = {
          burger: allBurgers
        };
        console.log(hbsObject);

        res.render("index", hbsObject);
      });
    });

    app.post("/", function(req, res){
      db.burgers.create({
        burger_name: req.body.name,
        devoured: false
      }).then(function(){
        res.redirect("/");
      });
    });

    app.put("/:id", function(req, res){
      db.burgers.update({
        devoured: true
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(){
        res.redirect("/");
      });
    });
 }
