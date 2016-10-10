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
        user: 'y5sbfio47k267c07',
        password: 'dz9l9adbl0t62m9p',
        database: 'i9u6y7tc7qqcswbe'
    }
}

var selectedSource = source.localhost;


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
