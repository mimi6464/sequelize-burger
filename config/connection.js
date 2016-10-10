var Sequelize = require('sequelize');

var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Mysql777',
        database: 'sequelizedBurger'
    },
    jawsDB: {
        port: 3306,
        host: 'z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'qh9v0yofk6ngv26s',
        password: 'tszhu1jq420wr8r6',
        database: 'mygopuvcfed6eess'
    }
}

var selectedSource = source.jawsDB;


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;
