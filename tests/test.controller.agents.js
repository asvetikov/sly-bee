
module.exports = {
    run : function () {
        for(i in tests)
        {
            tests[i]();
        }
    }
};

var test = require('asserts');

var agenModel = require('../model/agents.js');
var agentController = require('../controller/agents.js');

agentController.init(agentModel);

var tests =
{
    get : function()
    {
        var result = agentController.get();
    },
    add : function()
    {
    }
}
