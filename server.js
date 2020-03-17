const express = require('express'),
    app = express(),
    ip = process.env.IP,
    port = process.env.PORT || 8080,
    mongoose =  require('mongoose'),
    tasks = require('./api/models/allModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/allRoutes');
routes(app);

app.listen(port, ip);
console.log('The TODO REST API server is now running on IP: '+ ip + ' and Port: '+port );
