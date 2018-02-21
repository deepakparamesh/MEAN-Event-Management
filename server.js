
//all our Dependencies
var express = require('express');
app = express();
port = process.env.PORT || 8080;
expressLayouts = require('express-ejs-layouts');

// configuration

//tell express where to look the static file pages
app.use(express.static(__dirname + '/public'))

//set EJS as our templating
app.set('view engine', 'ejs');
app.use(expressLayouts);

// set our routes
app.use(require('./app/routes'));

// start the server
app.listen(port, () => {
    console.log(`the port is open in ${port}`)
});