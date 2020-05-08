
Title : Life Expectancy Database 

Abstract: 
Life expectancy is a statistical measure to estimate life of a being. It is a gauge to measure overall quality of life in each country. We know that life-expectancy of a country change from time to time depending on the living conditions. This research project answers the question whether countries improve their life expectancy year by year or deteriorate it. It also answers the question whether a gender group dominates other in life expectancies. To answer these questions and to play around with expectancy values this project "Life Expectancy Database" is built. The database can be used for querying (and analyzing) Life Expectancies (LE) of male, female (or both), across the globe. The DB consists of LE data from year 2000-2016 of around 183 countries and is taken from World Health Organization. [WHO,2020]. Using this database we did an analysis by taking sample from developed (G7 countries) and developing countries (SAARC countries and Middle east) to answer the questions and it was found that though most of the countries kept improving their expectancies each year, for some countries it fluctuated whereas for others it deteriorated.

--------------------------------------------------------------------------------------------------------

How to run the project ?

Step I. Clone project to local machine

Step II. Installations :

1. NodeJs : latest version : https://nodejs.org/en/
2. Mongo DB : latest version : https://www.mongodb.com/

Step III. Get Data to database 

1.Download "Data.json" file
2.Use command "mongoimport --db dbName --collection collectionName --file fileName.json"
  to import data to local machine
3.use command " echo 'mongod --nojournal' > mongod // to echo mongod
4.chmod a+x mongod // give permissions
5.run command ./mongod ..................... Starts DB 
	(To run project skip 6; go to Step IV)
	(To query on local machine follow 6.)
6.Open new terminal .......Use command "cd Bioinformatics_Project" to get into the project directory
7.Run command "mongo" to query locally
8.Mongo commands :
"show dbs : shows all existing databases"
"use dbname" : makes required database available
"show collections" : displays all collections
9. To query locally use command : db.collections.find({}).pretty(); 


Step IV : Install dependencies

1. To run the project certain dependencies need to be installed (APIs package.json file)  
2. Run command "npm install" to install dependencies
3. Run command "code ." to open project in visual studio
4. Use command "cd Bioinformatics_Project" to get into the project directory
5. Run command "node app.js" or "nodemon app.js" to run the file
6. Open "http://localhost:8080/" to view the web-app if you are running locally


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

2. "/life_expectancies" : Renders results for search query
3. "/landing" : Talks about research project, research question and results (First page)
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
Result is displayed in "/life_expectancies"




--------DB----------------------------


5. Database : Bioinformatics_project
	collection : life_expectancies
	Number of tuples : 5501
	Number of countries : 183
	Source : World health organization
	

--------------------------------------------------------------------------------------------------------


Languages :

Backend : NODE JS, MONGO, EXPRESS
Front end : HTML, CSS, JAVASCRIPT, BOOTSTRAP
Dependencies : body-parser: 1.19.0,ejs: 3.1.2, express: 4.17.1,mongoose: 5.9.10

	
--------------------------------------------------------------------------------------------------------

Sample Queries (@backend):

What is the life expectancy of India in the year 2015.
db.life_expectancy.find({$and :[{"dims.COUNTRY":"India"},{"dims.YEAR":"2015"}]})
 

Total number of records in the database.
life_expectancies.find({}).count()


	
Compare Healthy life expectancy (HALE) at birth (years) and Healthy life expectancy (HALE) at age 60 (years) of Female from Indonesia in the year 2010.
db.life_expectancies.find({$and :[{$or :[{"dims.GHO":" Healthy life expectancy (HALE) at birth
 (years)"},{"dims.GHO" : "Healthy life expectancy (HALE) at age 60 (years)"}]},{"dims.YEAR":"2010"},{"dims.COUNTRY":"Indonesia"}]).pretty() 
	
	
What are the countries whose male life expectancy was less than 50 in 2000.		
db.life_expectancies.find({$and :[{"dims.YEAR": "2000"},{"dims.SEX": "Male"},{"Value" : {$lt : "50"}}]}).pretty() 
		
--------------------------------------------------------------------------------------------------------

Research Question: 
The goal of this database is to analyze and infer whether the life expectancy of developed/developing countries is improving/deteriorating over the years. To achieve this, we compare life expectancy values of countries from years 2000-2016 among developed and developing countries. While comparing we consider life expectancies of both sexes- male and female together and also individually.

Objectives: 
•	Compare life expectancy values of both developed (USA, Canada, UK etc.) and developing (India, Pakistan, Bangladesh, etc.) countries from 2000-2016 and infer from data if life-expectancies are improving or deteriorating.

•	Compare life expectancy of male and female (together and separately) and infer from data which sex has better life-expectancy across.

-------------------------------------------------------------------------------------------------------

Results : Open '"/landing" -> results' to view results

Objective 1:
•	As expected, developed countries had greater life expectancy values compared to developing countries. While Japan had an expectancy value for both sexes of 74.8 in 2016, India has 60 years. 

•	All the developing countries had closer values ranging from 68-75 for both sexes, while developed countries had values ranging from 50 – 69. 


•	From year 2000 – 2016, In the observed countries though most of the country’s life expectancy improved, expectancy deteriorated in middle eastern country like Syria from 63 in 2005 – 55 in 2016. Also, Iran’s life expectancy fluctuated between 59’s and 64’s.

Objective 2:

•	When expectancies were compared between male and female, we found that almost all the countries have greater life expectancies of female than male. It was seen on an average that women lived at least 2-5 years longer than men. This was an interesting find, from which we may infer that either women on an average have more healthier practices when compared to men or they have a good mental health.


