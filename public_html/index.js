let express = require( 'express');
let app = express();
let port = 8080;
var path = require('path');
app.use(express.static('public_html'));

app.listen(port);
console.log("Listening on port" + port);

module.exports = app