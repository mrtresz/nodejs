const express = require("express");

const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const validationMiddleWare = require("./middleware/validationMiddleware");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const expressSession = require("express-session");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const logoutController = require("./controllers/logout");
//const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
const Schema = mongoose.Schema;
const app = new express();

// const customMiddleware = (req, res, next) => {
//   console.log("Custom middle ware called")
//   next()
// }





app.use(customMiddleware);

app.use(expressSession({
  secret: "keyboard cat"
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next()
})

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


/*app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts: blogposts,
  });
});*/

app.use("/posts/store", validationMiddleWare);




app.get("/posts/new", authMiddleware, newPostController);

app.get("/", homeController);

app.get("/post/:id", getPostController);

app.post("/posts/store", authMiddleware, storePostController);

app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);

app.post("/users/register", redirectIfAuthenticatedMiddleware, storeUserController);

app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);

app.post("/users/login", redirectIfAuthenticatedMiddleware, loginUserController);

app.get("/auth/logout", logoutController);

app.use((req, res) => res.render("notfound"));


app.listen(3000, () => {
  console.log("App listening on port 3000");
});
