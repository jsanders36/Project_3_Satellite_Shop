# Project_3_Satellite_Shop
database of satellites in different orbits for users to shop based on particular filters.

Run npm install in front_end and Backend directories to download all required dependencies
  cd front_end/
  npm install

  In another terminal,
  cd Backend/
  npm install

Open up two new terminals,
  In first terminal, navigate to Backend (cd Backend), then run:
    npx knex migrate:latest
    npx knex seed:run
    npm start
  In second terminal, navigate to front_end (cd front_end), then run:
    npm start

Enjoy the application!

