# Redux Feedback Loop

The purpose of this application is for a user to answer a set of questions focused on the users feedback. An example 
would be how they do feel on a scale of 1 - 5. The user is then taken to a final screen were they are able to 
send off their feedback and enter it into a database. They are then propted to start the cycle over and leave 
more feedback if desired with the same questions asked prior. 



## Built With
 - Node JS
 - React 
 - NPM
 - JSX
 - PostgreSQL 

## Getting Started

Clone the repo onto your local machine and start a database with PostgreSQL. 

Use the sequal document located in the repo to name the database and create the table.


## Prerequisites

- Node.js 
- Code editor w/ brew services 
- PostgreSQL 

### Installing 

1. Download project with git clone
2. npm install
3. open postgreSQL and create a database with the sequal file given
4. killall node if necessary
5. npm run server 
6. npm run client on one terminal



### Completed Features

Prompts a user for their feedback, asking four questions displayed on four seperate screens. 

After the user enters how they feel, taken to a new screen displaying all four of the answers. 

User may enter their info into the database and continue to enter in feedback again if desired. 


### Next Steps 

- Add some more questions 
- Add more material ui styling 
- Add an administrator page to overview the database onto the dom 

## Authors

- Jesse Gjerde

## Acknowledgments

- Dane Smith, Instructor
