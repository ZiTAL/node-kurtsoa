var mongodb = require("mongodb");
var mongoserver = new mongodb.Server("localhost", 27017);
var db = new mongodb.Db("test", mongoserver, {safe: true});

db.open(function(err, db)
{
  db.collection('kurtsoa', function(err, collection)
  {
    collection.find().toArray(function(err, docs)
    {
      console.log(docs);
      db.close();
    });
  });
});