# User Input Form

This is a simple web application that allows users to enter their first name, last name, and date of birth (DOB) through a form. The application validates the user inputs and saves them to a database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

### Prerequisites

Before you can run this application, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [MySQL](https://www.mysql.com/) (Make sure the MySQL server is up and running)

### Installation

1. Clone the the repository to you local machine:

`git clone git@github.com:JinglunJiang/user_inputs_form.git`

2. Install required dependencies:
   `npm install`

3. Change the database configuration and create the table
```
CREATE TABLE Users ( Id INT NOT NULL AUTO_INCREMENT, <br />
FirstName CHAR(30) NOT NULL,<br />
LastName CHAR(50) NOT NULL,<br />
DOB VARCHAR(10) NOT NULL,<br />
TimeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,<br />
PRIMARY KEY (Id) );<br />
```

4. Start the application
   `npm start`

## Usage

1. Open your web browser and go to http://localhost:3000.
2. Fill out the user input form with your first name, last name, and date of birth.
3. Click the "Save" button to submit the form.
4. The application will validate your input, and if it's valid, it will save the data to the database.

## Testing

The tests are used to test the validity of user inputs, basically the functions in the file './validation.js'.

Running the test by running
`npx jest`
