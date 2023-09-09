const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-db";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(`connection string ${connectionString}`);
    console.log("connected to the DB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
