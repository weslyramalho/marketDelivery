const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);

db.query("show tables").then(
    data => {
        console.log(data);
        db.close();
    }
)