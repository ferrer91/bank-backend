const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
//create express server
const app = express();

//database
dbConnection();

app.use(express.static('public'));

//routes
app.use('/api/auth', require('./routes/auth') );

//read and parse body
app.use( express.json() );



//Listener
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})