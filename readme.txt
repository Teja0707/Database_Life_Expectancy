
Title of the project: Life Expectancy Database 

Abstract: 
Life expectancy is a statistical measure to estimate life of a being. It is a gauge to measure overall quality of life in each country. We know that life-expectancy of a country change from time to time depending on the living conditions. This research project answers the question whether countries improve their life expectancy year by year or deteriorate it. It also answers the question whether a gender group dominates other in life expectancies. To answer these questions and to play around with expectancy values this project "Life Expectancy Database" is built. The database can be used for querying (and analyzing) Life Expectancies (LE) of male, female (or both), across the globe. The DB consists of LE data from year 2000-2016 of around 183 countries and is taken from World Health Organization. [WHO,2020]. Using this database we did an analysis by taking sample from developed (G7 countries) and developing countries (SAARC countries and Middle east) to answer the questions and it was found that though most of the countries kept improving their expectancies each year, for some countries it fluctuated whereas for others it deteriorated.

--------------------------------------------------------------------------------------------------------

How to run the project ?

Step I. Clone project to local machine

Step II. Installations :

1. NodeJs : latest version : https://nodejs.org/en/
2. Mongo DB : latest version : https://www.mongodb.com/

Step III. Get Data to database 

1.Download "data.json" file
2.Use command "mongoimport --db dbName --collection collectionName --file fileName.json" to import data 
  to local machine


Step IV : Install dependencies

2. Run command "npm install" to install dependencies
3. Run command "code ." to open project in visual studio
4. Use command "cd Bioinformatics_Project" to get into the project directory
5. Run command "node app.js" or "nodemon app.js" to run the file


Step V : Perform search ; Analyse results

--------------------------------------------------------------------------------------------------------

DB Schema

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
    


--------------------------------------------------------------------------------------------------------

What's in files ?

1. app.js : API calls, defines schema, defines routes, used to connect to server

----- Views directory --------------
2. "/life_expectancies" : Renders results for search
3. "/landing" : Talks about research project, research question and results
4. "/new" : Used to "Perfom Query" operations

Example use :
dims: {
                         COUNTRY: "Afghanistan",
                         GHO: "Healthy life expectancy (HALE) at birth (years)",
                         SEX: "Both sexes",
                         YEAR: "2016"
                        },
               Value: "53.0"
To search value in perform query (/"new")
----- Views directory --------------

--------DB-------------------------

5. Database : Bioinformatics_project
	collection : life_expectancies
	Number of tuples : 5501
	Number of countries : 183
	Source : World health organization
--------------------------------------------------------------------------------------------------------