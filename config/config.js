const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  secret: process.env.JWT_SECRET || "mysecretkey",
  db: process.env.MONGODB_URI || "mongodb://localhost:27017/samazonemobile",
};

module.exports = config;
