var class_instance = function()
{
    var private_var;
    this.public_var;

    var private_method = function()
    {
        console.log('private method');
    };

    this.public_method = function()
    {
        console.log('public method');
        new private_method();
    }

    this.__construct = function()
    {
        console.log('__construct');
        this.public_method();
    }
    this.__construct();
};

module.exports = class_instance;
