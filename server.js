'use strict'
const express = require('express');
const path = require('path');
const app = express();
let port =3000;
//body parser to process forms
const bodyParser = require('body-parser');
// Routers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Index = require('./routes/index');
const dbPosts = require('./routes/dbPosts');
//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

// mount routers
app.use('/', Index);
app.use('/', dbPosts);

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
});

app.listen(port,()=>console.log('running on localhost: ', port));