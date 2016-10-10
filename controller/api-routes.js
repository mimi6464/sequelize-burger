var path = require('path');
var model = require('../model/sequelize-burger.js');


module.exports = function(app) {

    app.post('/post', function(request, response) {

        if (request.body.burger_name) {
            model.create({ burger_name: request.body.burger_name })
                .then(function() {
                    response.redirect('/');
                });
        }
    });

    app.put('/update/:id', function(request, response) {
        model.update(

            {
                devoured: request.body.devoured
            },

            {
                where: {
                    id: request.params.id
                }
            }
        ).then(function() {
            response.redirect('/');
        })
    });
};
