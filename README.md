# sequelizedBurger

## Overview

sequelizedBurger can keep track of a list of Burger Names and whether they have been eaten.  The app was created using express, mysql, and sequelize.  Other dependencies used are listed in the package.json file.

## Prerequisites

Users should have node along with a mysql server to store the database when developing the app.  To run the app install the dependencies using 'npm install' and have a mysql server running with the appropriate database name on the local machine or connect to a server on the cloud.

## Usage

This is a single page app where users can type in the name of the burger on the bottom to add it to the uneaten list.  Next to each uneaten burger is a 'Devour' button that can be used to move the burger from the uneaten list to the eaten list.