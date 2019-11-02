# wemanity
Phonebook

HOW TO LAUNCH PROJECT

To launch this project you'll need to have postgres installed on your computer, you can download it from here: https://www.postgresql.org/
You'll also need Visual studio code: https://code.visualstudio.com/

1-  Clone this repository.
####
2-  Open the windows command line tool and go to the directory wemanity that you previously cloned.
####
3-  enter the command code .   (example: C:\Users\user\Documents\wemanity>code .)
####
4-  Open a terminal in visual studio code and enter the command npm start to start the server
    (example: C:\Users\user\Documents\wemanity>npm start)
####
5-  Open pgAdmin
####
6-  Back to vscode, enter the command npx sequelize:create (example: C:\Users\user\Documents\wemanity>npx sequelize:create)
####
7-  enter the command npx sequelize db:migrate
####
8-  If you want to implant data in the database enter the command node .\create-data.js
####
9-  Open a second terminal and enter cd phonebook
####
10- Once again enter npm start this time to start the react application.
