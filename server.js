const express = require("express");
let PORT;
const app = express();

if(process.env.JAWSDB_URL){
    PORT = process.env.PORT;
} else {
    PORT = process.env.PORT || 8080;
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("App listing on http://localhost:" + PORT);
});