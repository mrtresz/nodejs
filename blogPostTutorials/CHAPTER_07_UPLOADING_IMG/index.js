const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const BlogPost = require("./models/BlogPost.js");
//const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
const Schema = mongoose.Schema;
const app = new express();

app.use(fileUpload());



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// With app.set('view engine','ejs'), we tell Express to use EJS as our templating engine,
// that any file ending in .ejs should be rendered with the EJS package.
app.set("view engine", "ejs");
mongoose.connect("mongodb://127.0.0.1/my_database", { useNewUrlParser: true });
//app.get('/', (req, res) => {
//    res.render('index');
//});

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts: blogposts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogpost,
  });
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

//app.post('/posts/store',(req,res)=>{
// console.log(req.body)
//res.redirect('/')
//})

app.post("/posts/store", async (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
    await BlogPost.create({
      ...req.body,
      image: "/img/" + image.name,
    });
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
