require('dotenv').config();
const { Sequelize } = require('sequelize');
const { CONNECTION_STRING } = process.env;
const express = require('express');
const path = require('path');
const cors = require('cors');
const {format} = require("express/lib/response");
const app = express();
const { SERVER_PORT} = process.env;
const { seed } =require('./seed.js')


const { getExamples, deleteAdvice, deleteSongs  } = require('./controller.js');


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions:{
        ssl: {
            rejectUnauthorized: false, 
        },
    },
});

app.use(express.json());

app.use(cors());

app.post('/seed', seed);

const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir));

app.get("/api/examples", getExamples);

app.post('/advice', (req, res) => {
    const {advice} = req.body
    sequelize.query(`insert into advice (advice_given)
    values
    ('${advice}' );`)
        .then(dbRes => res.status(200).send(dbRes))
});

app.post('/songs', (req, res) => {
    const {songs} = req.body
    sequelize.query(`insert into songs (song_given)
    values
    ('${songs}' );`)
        .then(dbRes => res.status(200).send(dbRes))
});        








app.listen(process.env.SERVER_PORT, () => console.log(`Server running on port 3000 not ale ${process.env.SERVER_PORT}`))

