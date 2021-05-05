const express=require('express');
const path=require('path');
const request=require('request');
const getWeather=require('./src/api');
const app=express();
const port=process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'/public')));
app.get('/api',(req,res,next)=>
{
    const location=req.query.location;
    if(!location)
    {
        return console.log("enter location name");
    }
    getWeather(location,(data,error)=>
        {
           
            if(error)
            { 
                console.log("something gone wrong");
        

            }
            else
            {
                res.json(data);
            }

        });
});


app.get('/weather',(req,res,next)=>
{ 
    res.render('home');
    
});
app.get('/*',(req,res,next)=>
{
    res.render('error');


});


app.listen(port,() =>{

    console.log("server is on port"+port);
});