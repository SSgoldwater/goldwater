module.exports = {
  database: process.env.NODE_ENV == "development" ? "freshwater_dev" : "prod",
  port: '8080'
}
