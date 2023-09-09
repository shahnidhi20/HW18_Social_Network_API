const connection = require("../config/connection");
const { Course, Student } = require("../models");
const { Users } = require("../models");
//const { getRandomName, getRandomAssignments } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  //   // Drop existing courses
  //   await User.deleteMany({});

  //   // Drop existing students
  //   await Student.deleteMany({});

  // Create empty array to hold the students
  const students = [];

  const users = [
    { username: "Nidhi", email: "Nidhi@gmail.com" },
    { username: "Jill", email: "Jill@gmail.com" },
  ];

  // Add students to the collection and await the results
  await Users.collection.insertMany(users);

  //   // Add courses to the collection and await the results
  //   await Course.collection.insertOne({
  //     courseName: "UCLA",
  //     inPerson: false,
  //     students: [...students],
  //   });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
