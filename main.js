
var http = require('http');
var url = require('url');
var router = router('./router.js');

// inits models
var models =
{
    'agents' : require('./models/agents.js'),
    'users' : require('./models/users.js')
};

// inits controllers
var controllers = {
    'agents' : require('./controllers/agent.js'),
    'users' :  require('./controllers/users.js')
};

// links models and controllers
controllers['agents'].setModel('agents', model['agents']);
controllers['users'].setModel('users', model['users']);

// setups router
router.setControllers(controllers);
     
http.createServer(
    function (req, res) {
        return router.route(req.url);
    }
).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/agents/id123213');
