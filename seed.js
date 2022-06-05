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
    seed: (req, res) => 
    sequelize.query(`   

    drop table if exists advice; 
    drop table if exists songs;  

    create table advice (
        advice_id SERIAL PRIMARY KEY,
        advice_given TEXT NOT NULL
    );

    create table songs (
        songs_id SERIAL PRIMARY KEY,
        song_given TEXT NOT NULL
    );

    insert into advice (advice_given)
    values
    ('Think before you act.');

    insert into songs (song_given)
    values
    ('Wonderful World By Louis Armstrong');

    `).then(() => {
        console.log('DB seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
};