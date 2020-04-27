var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"), // parse through body elements of pages
    mongoose    = require("mongoose"); // setting up mongoose


mongoose.connect("mongodb://localhost:27017/Bioinformatics_Database",{useNewUrlParser : true,useUnifiedTopology : true}); // creates database with name Bioinformatics_Database

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs"); // simplify .ejs files to name

// SCHEMA SETUP
var life_expectancy_Schema = new mongoose.Schema(
	 [
		{ 
			dims: {
				COUNTRY: String,
         		GHO: String,
         		SEX: String,
         		YEAR: String,
		
		          },
		
	 		Value : String
		}
	]);
    


var life_expectancy = mongoose.model("life_expectancy", life_expectancy_Schema); // creates object to schema



//adding data to the mongodb

// var Life_expectancy_Data = new life_expectancy({
	
// 		fact :  {
//                 dims: {
//                          COUNTRY: "Afghanistan",
//                          GHO: "Healthy life expectancy (HALE) at birth (years)",
//                          SEX: "Both sexes",
//                          YEAR: "2016"
//                         },
//                Value: "53.0"
//               }
              
	
// });

// Life_expectancy_Data.save(function(err,le_data){
	
// 	if(err){
// 		console.log("Something went wrong");
// 	}else{
// 		console.log("Data saved");
// 		console.log(le_data);
// 	}
//})


// Retrieve all the cats from db and console.log each one 

// life_expectancy.find({"dims.COUNTRY":"Angola"},function(err,life_expectancies){
// 	if(err){
// 		console.log("Something went wrong");
// 	}else{
// 		console.log("Data retrieved..");
// 		console.log(life_expectancies);
// 	}
// });


// landing page 

app.get("/",function(req,res){
	
	res.render("landing");
	
});


// Get data from DB
// Perform queries : ex : life_expectancy.find({"dims.YEAR":"2016"})
app.get("/life_expectancies", function(req,res){
	
	life_expectancy.find({},function(err,Life_expectancyDB){
	if(err){
		console.log("Something went wrong");
	}else{
		console.log("Data retrieved..");
		res.render("life_expectancies",{Life_expectancies: Life_expectancyDB});
	}
});
		
			

});


app.post("/life_expectancies", function(req, res){
	

    // get data from form and add to life_expectancies db and perform search
    var country = req.body.country;
	var gho = req.body.gho;
    var sex = req.body.sex;
	var year = req.body.year;
	
	
	
    var newLife_expectancies = {dims: { COUNTRY: country, GHO:gho, SEX: sex, YEAR: year}}
	console.log("Data retrieved");
	Console.log(newLife_expectancies);
	  
		
	//Search query
	life_expectancy.find({},function(err,Life_expectancyDB){
	if(err){
		
		console.log("Something went wrong");
		
	}else{
		
		// console.log("Data retrieved..");
		console.log(Life_expectancyDB);
		res.render("life_expectancies",{Life_expectancies: Life_expectancyDB});
	 
	}
	
	});
   
});

// Perform search // new : form 
app.get("/life_expectancies/new", function(req, res){
   res.render("new"); 
});

//listening on port 3000
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});