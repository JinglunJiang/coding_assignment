# User Input Form

This is a simple web application that allows users to enter their first name, last name, and date of birth (DOB) through a form. The application validates the user inputs and saves them to a database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

### Prerequisites

Before you can run this application, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [MySQL](https://www.mysql.com/) (Make sure the MySQL server is up and running)

### Installation

1. Clone the the repository to you local machine:
   '''
   git clone git@github.com:JinglunJiang/coding_assignment.git
   '''

## create the table

CREATE TABLE Users (
Id INT NOT NULL AUTO_INCREMENT,
FirstName CHAR(30) NOT NULL,
LastName CHAR(50) NOT NULL,
DOB VARCHAR(10) NOT NULL,
TimeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (Id)
);

## jest

run the test by "npx jest"
