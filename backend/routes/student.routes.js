// backend/routes/student.routes.js

let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let studentSchema = require("../models/Student");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../config'); // Import the config file
// Signup route
router.route('/signup').post(async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  await User.create({ username, password: hashedPassword })
    .then(() => {
      res.json({
        message: 'User registered successfully.',
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Login route
router.route('/login').post(async (req, res, next) => {
  const { username, password } = req.body;

  await User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
          status: 404,
        });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).json({
          message: 'Invalid password.',
          status: 401,
        });
      }

      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      console.log('Generated Token: ',token);

      res.json({
        auth: true,
        token,
        message: 'Login successful.',
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Logout route
router.route('/logout').get((req, res) => {
  res.json({
    auth: false,
    token: null,
    message: 'Logout successful.',
    status: 200,
  });
});

// CREATE Student
router.route("/create-student").post(async (req, res, next) => {
  await studentSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// READ Students
router.route("/").get(async (req, res, next) => {
  await studentSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Get Single Student
router.route("/get-student/:id").get(async (req, res, next) => {
  await studentSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Update Student
router.route("/update-student/:id").put(async (req, res, next) => {
  await studentSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// Delete Student
router.route("/delete-student/:id").delete(async (req, res, next) => {
  await studentSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
//Find a student by name and email
router.route("/find-student").post(async (req, res, next) => {
  const { name, email } = req.body;
  await studentSchema
    .findOne({ name, email })
    .then((result) => {
      res.json({
        data: result,
        message: "Student found successfully.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});


// Extend MERN stack CRUD API to have
// these routes:

// FindbynameandEmail()
// GetAscdending()
// Test these routes from Postman


//Get students in ascending order of a specific field (e.g., name)
router.route("/get-students-ascending").get(async (req, res, next) => {
  const fieldToSort = "name"; // You can change this to the field you want to sort by
  await studentSchema
    .find()
    .sort({ [fieldToSort]: 1 }) // 1 for ascending, -1 for descending
    .then((result) => {
      res.json({
        data: result,
        message: "Students fetched in ascending order.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;