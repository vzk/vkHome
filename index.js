
 var express = require("express");
 var app = express();

// Routing all other requests
app.use(express.static(__dirname + '/docs'));


  
var port = process.env.PORT || 5000;
    app.listen(port, function() { 
        console.log("Listening on " + port); 
    });

