# ViaTick-Assignment

- **Technology stack**: This project primarly used NodeJs, Javascript and Sequelize for database.
- **Status**: 1.1

## Dependencies
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "cross-env": "^7.0.3",
- "express": "^4.18.2",
- "mysql2": "^3.1.2",
- "jest": "^29.4.3",
- "sequelize": "^6.29.0"

## devDpendencies
- "nodemon": "^2.0.20",
- "sequelize-cli": "^6.6.0"

## Installation and Run
In .env file, change NODE_ENV to development and update database information with local.

```bash
npm install
npm run db:reset
npm start
```

## Configuration

SERVER_PORT=5000
NODE_ENV=test

# DEV
MYSQL_USER="Your DB Name"
MYSQL_PASSWORD="Your DB Password"
MYSQL_DB_NAME=route_db
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
# TEST
MYSQL_TEST_USER="Your DB Name"
MYSQL_TEST_PASSWORD="Your DB Password"
MYSQL_TEST_DB_NAME=route_db_test
MYSQL_TEST_HOST=127.0.0.1
MYSQL_TEST_PORT=3306

MAPBOX_KEY="pk.eyJ1IjoiaGVpbi1odGV0IiwiYSI6ImNsZWpmeHl2YTA5cDMzcW52dXhxeGNwdnQifQ.J07fJ3kqnnEJElsXo-C4jQ"

## How to test the software

In .env file, change NODE_ENV to "test" and update database information with local. Using "jest" JavaScript testing framework for the process.

```bash
npm run db:reset
npm run test
```
## Known issue
Migration issue : queryInterface.bulkInsert error for geometry datatype. Fixed by running manual service.

## Credits and references

1. https://sequelize.org/api/v6/class/src/data-types.js~geography
2. https://docs.mapbox.com/api/navigation/optimization-v1/
