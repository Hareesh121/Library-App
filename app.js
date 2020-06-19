const express = require('express');

const app = new express();
const nav= [
    {
        link:'/books',
        name:'Books'}
        ,
        {
            link:'/Authors',
            name:'Authors'
        },
        {
            link:'/Login',
            name:'Login'},
            {
                link:'/Signup',
                name:'SignUp'}
            
    ];

const booksRouter= require('./src/routes/bookRoutes')(nav)
const authorsRouter= require('./src/routes/authorRoutes')(nav)
const loginRouter= require('./src/routes/loginRoutes')(nav)
const signupRouter= require('./src/routes/signupRoutes')(nav)

app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views",__dirname+ "/src/views");

app.use('/books',booksRouter);
app.use('/Authors',authorsRouter);
app.use('/Login',loginRouter);
app.use('/Signup',signupRouter);

app.get("/",function (req,res){

    res.render("Home",
    { 
       title:'library',
       nav
    });
});



app.listen(5000); 
console.log("port : 5000")
