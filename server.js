var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(path.join(__dirname, '/public')));


app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
  });
});
