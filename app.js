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


// delete them later
var Life_expectancies = [
		{
		
		 dims: {
                         COUNTRY: "Afghanistan",
                         GHO: "Healthy life expectancy (HALE) at birth (years)",
                         SEX: "Both sexes",
                         YEAR: "2016"
                        },
               Value: "53.0"
              },
              {
                dims: {
                         COUNTRY: "Afghanistan",
                         GHO: "Healthy life expectancy (HALE) at birth (years)",
                         SEX: "Both sexes",
                         YEAR: "2015"
                        },
               Value: "53.2"
              } 
		
		] 


// life_expectancy.create(
//     {
  
   // fact: [      {
   // dims: {
   //                       COUNTRY: "Afghanistan",
   //                       GHO: "Healthy life expectancy (HALE) at birth (years)",
   //                       SEX: "Both sexes",
   //                       YEAR: "2016"
   //                      },
   //             Value: "53.0"
   //            }   
              
   // ]},
	// },
	// function(err, life_expectancy){
	// if(err){
	// console.log(err);
	// } else {
	// console.log("Data created : ");
	// console.log( life_expectancy);
	// }
	// });


//adding a new cat to the mongodb

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




// var campgrounds = [
// 		{name : "Corona virus", image : "https://images.stockfreeimages.com/1839/sfi226w/18391712.jpg"},
// 		{name : "zika virus", image : "https://images.stockfreeimages.com/2002/sfi226w/20027076.jpg"},
// 		{name : "Hanta virus", image : "https://images.stockfreeimages.com/1535/sfi226w/15353660.jpg"},
// 	{name : "Corona virus", image : "https://images.stockfreeimages.com/1839/sfi226w/18391712.jpg"},
// 		{name : "zika virus", image : "https://images.stockfreeimages.com/2002/sfi226w/20027076.jpg"},
// 		{name : "Hanta virus", image : "https://images.stockfreeimages.com/1535/sfi226w/15353660.jpg"},
// 	{name : "Corona virus", image : "https://images.stockfreeimages.com/1839/sfi226w/18391712.jpg"},
// 		{name : "zika virus", image : "https://images.stockfreeimages.com/2002/sfi226w/20027076.jpg"},
// 		{name : "Hanta virus", image : "https://images.stockfreeimages.com/1535/sfi226w/15353660.jpg"}
	
// 		]

// landing page 

app.get("/",function(req,res){
	
	res.render("landing");
	
});


app.get("/life_expectancies", function(req,res){
	
	life_expectancy.find({"dims.COUNTRY":"Afghanistan"},function(err,Life_expectancyDB){
	if(err){
		console.log("Something went wrong");
	}else{
		console.log("Data retrieved..");
		res.render("life_expectancies",{Life_expectancies: Life_expectancyDB});
	}
});
		
			

});

// 	{dims: {
//                          COUNTRY: "Afghanistan",
//                          GHO: "Healthy life expectancy (HALE) at birth (years)",
//                          SEX: "Both sexes",
//                          YEAR: "2016"
//                         },
//                Value: "53.0"
// }}




app.post("/life_expectancies", function(req, res){
	

    // get data from form and add to life_expectancies array and perform search
    var country = req.body.country;
	var gho = req.body.gho;
    var sex = req.body.sex;
	var year = req.body.year;
	//var value = req.body.value;
    var newLife_expectancies = {dims: { COUNTRY: country, GHO:gho, SEX: sex, YEAR: year}}
	//, Value: value} // change new to search later
    // Life_expectancies.push(newLife_expectancies);
	
	console.log("what's goin on");
	
	console.log(newLife_expectancies);
		
	//Search query
	life_expectancy.find({$and:[{"dims.COUNTRY" : country},{"dims.GHO":gho},{"dims.SEX":sex},{"dims.YEAR":year}]},function(err,Life_expectancyDB){
	if(err){
		console.log("Something went wrong");
	}else{
		// console.log("Data retrieved..");
		res.render("life_expectancies",{Life_expectancies: Life_expectancyDB});
		
		 //redirect back to campgrounds page
    //res.redirect("/life_expectancies");
	}
	
	});
   
});

app.get("/life_expectancies/new", function(req, res){
   res.render("new"); 
});

		
		



// // life_expectancies : find gives all data from db 

// app.get("/life_expectancies",function(req,res){
	
// 	life_expectancy.find({}, function(err, alllife_expectancieslife_expectancies){
//        if(err){
//            console.log(err);
//        } else {
		
// 		res.render("index",{life_expectancies: alllife_expectancies});
		   
// 	   }
// 		});
// 	});

// app.post("/campgrounds",function(req,res){
// 	// get data from form and add to cmpgrounds array
// 	var name = req.body.name;
// 	var image = req.body.image;
// 	var desc = req.body.description;
// 	var newCampground = {name: name, image: image,description: desc}
//     // Create a new campground and save to DB
//    life_expectancy.create(newCampground, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             //redirect back to campgrounds page
//             res.redirect("/campgrounds");
//         }
//     });
// });

// // form - create new campground
// app.get("/campgrounds/new",function(req,res){
		
// 		res.render("new");
	
// });

// // SHOW - shows more info about one campground
// app.get("/campgrounds/:id", function(req, res){
//     //find the campground with provided ID
//    life_expectancy.findById(req.params.id, function(err, foundCampground){
//         if(err){
//             console.log(err);
//         } else {
//             //render show template with that campground
//             res.render("show", {campground: foundCampground});
//         }
//     });
// })


//listening on port 3000
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});