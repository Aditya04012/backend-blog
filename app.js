const express=require("express");
const bodyParser=require("body-parser");
var _ = require('lodash');
const app=express();

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

var posts=[];
var x,y;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.render("home",{startingcontent:homeStartingContent,homepost:posts});
  
});

app.get("/about",function(req,res){
    res.render("about",{about:aboutContent});
});

app.get("/contact",function(req,res){
    res.render("contact",{contact:contactContent});
});

app.get("/compose",function(req,res){
  res.render("compose");
});
app.post("/compose",function(req,res){
    const post={
        title:req.body.composetitle,
        content:req.body.composetext
    };
    posts.push(post);
    res.redirect("/");
});
app.get("/posts/:topics",function(req,res){
   // console.log(req.params.topics);

for(var i=0;i<posts.length; i++)
{
     x=_.lowerCase(req.params.topics);
 y=_.lowerCase(posts[i].title);
    if(y==x){
      //  console.log("match found");
        // console.log("/posts/"+x);
        res.render("post",{postarray:posts[i]});
    }
    
}
});


app.listen(3000,function(){
    console.log("server running at port 3000");
});