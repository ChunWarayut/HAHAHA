const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3001;

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use((req, res, next) => {
  const origin = req.get('origin');
  // TODO Add origin validation
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log('API Start server at port: ', port)
})

var publicDir = require('path').join(__dirname,'./image');
app.use(express.static(publicDir));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var appRoutesAbout = require('./routes/appRoutesAbout');
appRoutesAbout(app); //register the route 1

var appRoutesAdmin = require('./routes/appRoutesAdmin');
appRoutesAdmin(app); //register the route 1

var appRoutesAdminStatus = require('./routes/appRoutesAdminStatus');
appRoutesAdminStatus(app); //register the route 1

var appRoutesAlbum = require('./routes/appRoutesAlbum');
appRoutesAlbum(app); //register the route 2

var appRoutesAlbumEvents = require('./routes/appRoutesAlbumEvents');
appRoutesAlbumEvents(app); //register the route 2

var appRoutesAlbumMarket = require('./routes/appRoutesAlbumMarket');
appRoutesAlbumMarket(app); //register the route 2

var appRoutesAlbumSpace = require('./routes/appRoutesAlbumSpace');
appRoutesAlbumSpace(app); //register the route 2

var appRoutesBlogs = require('./routes/appRoutesBlogs');
appRoutesBlogs(app); //register the route 3

var appRoutesBooking = require('./routes/appRoutesBooking');
appRoutesBooking(app); //register the route 4

var appRoutesContact = require('./routes/appRoutesContact');
appRoutesContact(app); //register the route 5

var appRoutesEvents = require('./routes/appRoutesEvents');
appRoutesEvents(app); //register the route 6

var appRoutesHome = require('./routes/appRoutesHome');
appRoutesHome(app); //register the route 7

var appRoutesMarket = require('./routes/appRoutesMarket');
appRoutesMarket(app); //register the route 8

var appRoutesMarketType = require('./routes/appRoutesMarketType');
appRoutesMarketType(app); //register the route 8.1

var appRoutesMarketSubType = require('./routes/appRoutesMarketSubType');
appRoutesMarketSubType(app); //register the route 8.2

var appRoutesPolicy = require('./routes/appRoutesPolicy');
appRoutesPolicy(app); //register the route 9

var appRoutesSetting = require('./routes/appRoutesSetting');
appRoutesSetting(app); //register the route 10

var appRoutesSpace= require('./routes/appRoutesSpace');
appRoutesSpace(app); //register the route 11

var appRoutesSpaceType = require('./routes/appRoutesSpaceType');
appRoutesSpaceType(app); //register the route 11.1

var appRoutesSpaceSubType = require('./routes/appRoutesSpaceSubType');
appRoutesSpaceSubType(app); //register the route 11.2

var appRoutesTitle = require('./routes/appRoutesTitle');
appRoutesTitle(app); //register the route 12

var appRoutesFile = require('./routes/appRoutesFile');
appRoutesFile(app); //register the route 13

var appRoutesAbout = require('./routes/appRoutesAbout');
appRoutesAbout(app); //register the route 14



var appRoutesD = require('./routes/appRoutesD');
appRoutesD(app); //register the route 15





