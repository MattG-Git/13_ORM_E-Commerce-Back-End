# 13_ORM_E-Commerce-Back-End

# Description
This is a backend application that manages products, categories, and tags that a typical e-commerce website might use to manage their inventory. The application uses an express router and sequelize to get, post, put and delete data to a SQL database. 


# Acceptance Criteria
I wrote the  code to meet the following acceptance criteria:

* GIVEN a functional Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete data in my database

# Installation

* npm install to install required npm packages
* Install Node.js to run application
* Install MySQL to source Schema and seeds

# Usage
To use this application, first log into MySQL and source the database using SOURCE schema.sql then seed the database, running the command Node seeds. In order to initiate the app, run npm start. 

# Capabilities

* Get All Products 
* Get One Product By ID
* Create New Product
* Update Product By ID
* Delete Product By ID
* Get All Categories
* Get One Category By ID
* Create New Category
* Update Category BY ID
* Delete Category By ID
* Get All Tags
* Get One Tag By ID
* Create New Tag
* Update Tag By ID
* Delete Tag By ID


# Video Demo

PRODUCT TESTING: 
[ORM BackEnd E_Commerce Testing Products.webm](https://user-images.githubusercontent.com/70189946/192928136-eed81642-b969-4019-aece-080104538a14.webm)

CATEGORY TESTING: 
[ORM BackEnd E_commerce Testing Categories.webm](https://user-images.githubusercontent.com/70189946/192928318-91d99acf-09c9-408e-aef3-6ebcf41fecad.webm)

TAG TESTING: 
[ORM BackEnd E_Commerce Testing Tags.webm](https://user-images.githubusercontent.com/70189946/192928530-bda053ae-d24c-4843-9f9f-48891a0e6c17.webm)

