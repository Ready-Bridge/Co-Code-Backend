const { DataSource } = require("typeorm");
const config = require("../../WINK-Project-2023/src/configs");

module.exports = new DataSource({
  type: "mysql",
  synchronize: true,
  logging: false,
  entities: ["./src/entities/*.js"],
  migrations: [],
  subscribers: [],
  ...config.db,
});
