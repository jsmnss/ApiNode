var express = require('express'),
    app = express(),
    ip = process.env.IP,
    port = process.env.PORT || 8080;

app.listen(port, ip);
console.log('The TODO REST API server is now running on IP: '+ ip + ' and Port: '+port );
