const express = require("express");
const app = express();


// Add this to the top of your file
const exphbs = require("express-handlebars");

// Then these two lines after you initialise your express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Nawal's Homepage" // insert your name instead
    , subheading:"About me!"
  });
});

app.get("/my-cv", (req, res) => {
  res.render("my-cv", {
    title: "Nawal's CV", subheading: "My CV"  
  });
});

app.get("/admin", (req, res) => {
  res.render("admin", {
    title: "Nawal's blog"
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Nawal's contact page"
});
});

// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", {'extensions': ['html']}));


app.get("/", (req,res) => 
app.get("/contact", function(req, res) {
res.render("this is a contact page");
}))


// what does this line mean: process.env.PORT || 3000
//app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
//});

//to add to heroku
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});