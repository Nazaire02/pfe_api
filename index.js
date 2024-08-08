const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

// API file for interacting with MongoDB
const transactionRoute = require('./routes/transactionRoute')

app.use(cors());
app.use(bodyParser.json());

//MES ROUTES
const apiName = '/api';
app.use(apiName, transactionRoute)


//MongoDb connexion
const mongoose = require('mongoose');
const config = require('./config/database')
mongoose.connect(config.database);

// On Connection
mongoose.connection.on("connected", () => {
    console.info("Connected to database " + config.database);
});

// On Error
mongoose.connection.on('error', () => console.log('error'));

//Ajout du Port
const port = process.env.PORT || "3000";
app.set("port", port);

const serveur = http.createServer(app)
serveur.listen(port, ()=> {
    console.log(`Running on localhost ${port}`)
})