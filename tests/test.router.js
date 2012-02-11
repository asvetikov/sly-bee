
module.exports = {
    run : function() {}
};

var router = require('./router.js');
var assert = require('assert');

var controllers = {
    'controller1' :
    {
        GET : function(req, res) {
            return 'controller1-get';
        },
        POST : function(req, res) {
            return 'controller1-post';
        },
    },
    'controller2' : function(req, res) {}
};

router.setControllers(controllers);

var req = {}, res = {};

assert.equal(
    router.route('/controller1', 'GET')(req, res),
    'controller1-get'
);

assert.equal(
    router.route('/controller1', 'POST')(req, res),
    'controller1-post'
);

