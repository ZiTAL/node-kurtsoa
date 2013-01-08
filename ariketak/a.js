                    var singleton =
                    {
                        var private;
                        this.public;

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
                        this.__construt();
                    }

module.exports = singleton;
