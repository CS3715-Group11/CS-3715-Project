
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , MilmoreCampus = require('./routes/MilmoreCampus')
  , About = require('./routes/About')
  , BlexfieldCampus = require('./routes/BlexfieldCampus')
  , BlexfieldCourses = require('./routes/BlexfieldCourses')
  , BlexfieldDirections = require('./routes/BlexfieldDirections')
  , MilmoreDirections = require('./routes/MilmoreDirections')
  , MilmoreCourses = require('./routes/MilmoreCourses')
  , PreviousCourses = require('./routes/PreviousCourses')
  , Student = require('./routes/Student')
  , http = require('http')
  , path = require('path');

var app = express();

app.locals.points = "10,121";
app.locals.videodata = require("./videodata.json");
app.locals.homeinfo =  require("./homeinfo.json");
//.forEach to go through an array
//videodata.categories.forEach(fuction(item){});
//'item' represents each object in the array

// all environments
app.set('port', process.env.PORT || 3341);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/MilmoreCampus', MilmoreCampus.list);
app.get('/About', About.list);
app.get('/BlexfieldCampus', BlexfieldCampus.list);
app.get('/BlexfieldCourses', BlexfieldCourses.list);
app.get('/BlexfieldDirections', BlexfieldDirections.list);
app.get('/MilmoreCourses', MilmoreCourses.list);
app.get('/MilmoreDirections', MilmoreDirections.list);
app.get('/PreviousCourses', PreviousCourses.list);
app.get('/Student', Student.list);
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//reading/writing from json files
var fs = require('fs');
var obj;
fs.readFile('homeinfo.json', 'utf8', function(err, data){
	if (err) throw err;
	obj=JSON.parse(data);
	var temp = obj.binfo;
	console.log(temp);
	//fs.writeFile("loop.json", JSON.stringify(obj), 'utf8');
	
});









