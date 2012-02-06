//
// Accessor controller
//


module.exports = {
    // actions
    indexAction: function () {
    },
    detailsAction: function () {
    },
    adduserAction: function() {
    },
    removeuserAction: function() {
    },
    editgroupAction: function() {
    },
    // public methods
    getItem: function(id) {
    },
    getUserTitles: function() {
    },
    addChild: function(group, uid) {
    },
    removeChild: function(role) {
    },
    deleteRole: function(login) {
    }
    // private methods
    getNewRecords: function() {
    },
    getGroupForm: function(params) {
    },
    getAddUserForm: function(params) {
    }
};

var priveleges_table = 'AccessorPriveleges';
var inheritance_table = 'AccessorInheritance';
var permissions_table = 'AccessorPermissions';
var resources_table = 'AccessorResources';
var roles_table = 'AccessorRoles';
var users_table = 'Users';
var accessor;

