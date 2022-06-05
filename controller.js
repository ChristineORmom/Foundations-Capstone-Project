
require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false 
        }
    }
});

module.exports = {
    getExamples: (req, res) => {
        const example = ["Dancing with Myself By Billy Idol",
        "Happy By Pharrell Williams",
        "Wonderful World By Louis Armstrong",
        "Shout By The Isley Brothers",
        "Roar By Katy Perry",
        "We Will Rock You By Queen",
        "Respect By Aretha Franklin",
        "Girl on Fire By Alicia Keys",
        "Beautiful Day By U2",
        "It's My Life By Bon Jovi"]

        let randomIndex = Math.floor(Math.random()* example.length);
        let randomExample = example[randomIndex];

        res.status(200).send(randomExample);
    },

    

}









   