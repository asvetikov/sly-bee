
var url = require('url');

var controllers = {};

module.exports = {
    setControllers : function (newControllers) {
        controllers = newControllers;
    },
    route: function (reqUrl, reqMethod) {
        var pathName = url.parse(reqUrl).pathname;
        var basePath = pathName.slice(1).split('/', 1);
        var controllerName = basePath[0].toLowerCase();
        var controller = controllers[controllerName];

        switch(reqMethod) {
            case 'GET':
                return controller.GET;
            case 'PUT':
                return controller.PUT;
            case 'POST':
                return controller.POST;
            case 'DELETE':
                return controller.DELETE;
        };
    }
};

