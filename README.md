# coding_assignment

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
