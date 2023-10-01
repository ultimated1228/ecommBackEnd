  <p id="back_to_top"></p>
  
# ecommBackEnd
An ecommerce backend built using express.js API configured to use Sequelize to interact with a MySQL database

  ## Table of Contents

  <div style="display: flex;">
  <a href="#description" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Description-37a779?style=for-the-badge" alt="Description" />
  </a>
  <a href="#installation" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Installation-37a779?style=for-the-badge" alt="Installation" />
  </a>
  <a href="#usage" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Usage-37a779?style=for-the-badge" alt="Usage" />
  </a>
  <a href="#contributing" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Contributing-37a779?style=for-the-badge" alt="Contributing" />
  </a>
  <a href="#tests" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Tests-37a779?style=for-the-badge" alt="Tests" />
  </a>
  <a href="#license" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" alt="License" style="height:28px" />
  </a>
  <a href="#contact" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Contact-37a779?style=for-the-badge" alt="Contact" />
  </a>
</div>

## Description
An ORM backend application with provided CRUD routes for categories, products, and tags.  This application was created as a part of the UC-Irvine coding bootcamp.   

### Starter Code

The starter code at [this repo](https://github.com/coding-boot-camp/fantastic-umbrella) was provided.

### Acceptance Criteria and User Story

The following user story and acceptance criteria were provided:

#### User Story
<hr>
AS A manager at an internet retail company   
I WANT a back end for my e-commerce website that uses the latest technologies   
SO THAT my company can compete with other e-commerce companies    

#### Acceptance Criteria
<hr>
GIVEN a functional Express.js API   
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize  
WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data  
WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database  

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Installation

<ul>
<li>
Download the files from this <a href="https://github.com/ultimated1228/ecommBackEnd">github repo</a>.
</li><li>
Create a .env file with the following information:
<ul><li>
DB_NAME='ecommerce_db'
</li><li>
DB_USER='' (your mysql user.  Typically this is root.)
</li><li>
DB_PW='' (your password IF you have one on your mysql)
</li></ul>
<li>
If you are on a PC (instead of a mac), you will need to go into the config folder and open connections.js. Change "Host: '127.0.0.1'" to "Host: 'localhost'" 
</li><li>
Open up the db folder in a command line terminal. 
</li><li>
Run "mysql -uroot" add -p if you your mysql is password protected. 
</li><li>
Use the command "SOURCE schema.sql" to create the employee_dir database. 
</li><li>
Exit mysql. 
</li><li>
Open the main folder in a command line terminal. 
</li><li>
Run "npm i" to install the dependencies from the package.json file. 
</li><li>
Run "node seeds/index.js" to seed starter data.
</li><li>
Now run "node server".   
</li><li>
In a HTTP/API client such as Insomnia or Postman to run the api routes from the server, these include:
<ul>
<li>
Get request to view all Categories: http://localhost:3001/api/categories
</li><li>
Get request to view a Category by specific ID: http://localhost:3001/api/categories/1 (where the integer reprsents the category_id)
</li><li>
Post request to create a new category: http://localhost:3001/api/categories
<ul><li>
with a json body such as (NOTE: it is not necessary to pass the id as it is set to auto increment, but you can pass if here if you would like):  <br>
{  <br>
	"id": "", <br>  
	"category_name": "Shorts",<br>  
	"product": []  <br>
}   
</li></ul><li>
Put request to update a category: http://localhost:3001/api/categories/1 (where the final integer reprsents the category_id you want to change)
<ul><li>
with a json body reflecting the changes you would like to make to that category:  <br>
{  <br>
	"id": "5", <br>  
	"category_name": "Pants",<br>  
	"product": [1, 7, 8]  <br>
}   
</li></ul><li>
Delete request to delete a category: http://localhost:3001/api/categories/1 (where the final integer reprsents the category_id you want to delete)
</li></ul>
</li><li>
Follow similar structures with the appropriate JSON bodies to CRUD the other models.  
</li>
</ul><br>
<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Usage
Here are examples of the app in use:
<hr>

### Gif showing the various routes in action:

<img src="./media/Ecomm gif recording.gif"><br>

<hr>

### Video Walkthrough

[Please click here to see a full video walk through with audio](https://www.youtube.com/watch?v=zBS9_fS8WI0)
<br><br>

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Contributing
Everyone is welcome to send contributions up for review through github!  All contributions will certainly be reviewed and committed if found valuable!

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Tests
No tests developed for this app.

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## License
MIT License

Copyright (c) 2023 ultimated1228

Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.



Fore more details on the [MIT License](https://opensource.org/licenses/MIT) please click the link!

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Contact
You can get in touch with the creator through:

[My Github](https://github.com/ultimated1228)

[Email the creator](mailto:stevenlucasmeyer@gmail.com)


<p align="right">(<a href="#back_to_top">back to top</a>)</p>