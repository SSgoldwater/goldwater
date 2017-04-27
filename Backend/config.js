module.exports = {
  database: process.env.NODE_ENV == "development" ? "goldwater_io_dev" : "prod",
  port: '8080'
}
