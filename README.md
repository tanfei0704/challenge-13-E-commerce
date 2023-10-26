## challenge-13-E-commerce
This app is to build a back end for the e-commerce site with some provided codes. 

## table of content
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [License](#license)
* [Installation](#installation)
* [Demo](#demo)

## user story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## acceptance criteria
  
``` 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## license
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## installation
To get started clone this repository using 

Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2 dotenv
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
and 
```terminal
use ecommerce_db
```
Then quit MySQL shell and input the following in your terminal
```terminal
npm run seed
```
to start running application simply input 
```terminal
node server.js
```
Open up Insomnia core to GET, POST, PUT and DELETE from different routes.

## demo
<a href= https://drive.google.com/file/d/1BbHlcVUtfzW1u5zuWpt3YdKzc0LT5REg/view>https://drive.google.com/file/d/1BbHlcVUtfzW1u5zuWpt3YdKzc0LT5REg/view</a>
![demo](./Assets/category-get_post_put_delete.gif)

<a href=https://drive.google.com/file/d/1XUu-lDTHSTWJQpWm5Z8Mf9g1P5J-plMM/view>https://drive.google.com/file/d/1XUu-lDTHSTWJQpWm5Z8Mf9g1P5J-plMM/view</a>
![demo](./Assets/product-get_put_post_delete.gif)

<a href=https://drive.google.com/file/d/1g9neWXcYTMk6ljm-5H9PAmfmzOMufDBF/view>https://drive.google.com/file/d/1g9neWXcYTMk6ljm-5H9PAmfmzOMufDBF/view</a>
![demo](./Assets/tag-get_post_put_delete.gif)