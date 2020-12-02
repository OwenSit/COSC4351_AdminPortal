const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { jwtkey } = require("../keys");
const router = express.Router();
const Account = mongoose.model("Account");
const Admin = mongoose.model("Admin");
const Finance = mongoose.model("Finance");
const Hr = mongoose.model("Hr");
const Sales = mongoose.model("Sales");
const Technology = mongoose.model("Technology");
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const account = new Account({ username, password, role });
    await account.save();
    const token = jwt.sign({ userId: account._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/showLinks", async (req, res) => {
  const { role } = req.body;

  try {
    if (role == "Admin") {
      Admin.find({}, { linkname: 1, _id: 0 }, function (err, links) {
        if (err) return handleError(err);
        console.log(links);
        res.send(links);
      });
    } else if (role == "Finance") {
      Finance.find({}, { linkname: 1, _id: 0 }, function (err, links) {
        if (err) return handleError(err);
        console.log(links);
        res.send(links);
      });
    } else if (role == "Hr") {
      Hr.find({}, { linkname: 1, _id: 0 }, function (err, links) {
        if (err) return handleError(err);
        console.log(links);
        res.send(links);
      });
    } else if (role == "Sales") {
      Sales.find({}, { linkname: 1, _id: 0 }, function (err, links) {
        if (err) return handleError(err);
        console.log(links);
        res.send(links);
      });
    } else if (role == "Technology") {
      Technology.find({}, { linkname: 1, _id: 0 }, function (err, links) {
        if (err) return handleError(err);
        console.log(links);
        res.send(links);
      });
    }
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/findRole", async (req, res) => {
  const { name, pwd } = req.body;

  try {
    Account.find({ username: name }, "password", function (err, passwords) {
      if (err) return handleError(err);
      console.log(passwords[0].password);
      bcrypt.compare(pwd,passwords[0].password,(err,isMatch) => {
        if (err) return handleError(err);
        if (isMatch) {
          console.log("Correct Password")
          try {
            Account.find({ username: name }, "role", function (err, roles) {
              if (err) return handleError(err);
              console.log(roles[0].role);
              res.send(roles[0].role);
            });
          } catch (err) {
            res.status(422).send(err.message);
          }
        } else {
          console.log("Incorrect Password");
          res.send("Incorrect Password");
        }
      });
    });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(422)
      .send({ errpr: "must provide username and password" });
  }
  const account = await Account.findOne({ username });
  if (!account) {
    return res.status(422).send({ error: "username is incorrect!" });
  }
  try {
    await account.comparePassword(password);
    const token = jwt.sign({ userId: account._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "password is incorrect!" });
  }
});

router.post("/admin", async (req, res) => {
  console.log(req.body);

  const { linkname } = req.body;
  try {
    const admin = new Admin({ linkname });
    await admin.save();
    res.send("create Admin links succeed");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/finance", async (req, res) => {
  console.log(req.body);

  const { linkname } = req.body;
  try {
    const finance = new Finance({ linkname });
    await finance.save();
    res.send("create Finance links succeed");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/hr", async (req, res) => {
  console.log(req.body);

  const { linkname } = req.body;
  try {
    const hr = new Hr({ linkname });
    await hr.save();
    res.send("create Hr links succeed");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/sales", async (req, res) => {
  console.log(req.body);

  const { linkname } = req.body;
  try {
    const sales = new Sales({ linkname });
    await sales.save();
    res.send("create Sales links succeed");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/technology", async (req, res) => {
  console.log(req.body);
  
  const { linkname } = req.body;
  try {
    const technology = new Technology({ linkname });
    await technology.save();
    res.send("create Technology links succeed");
  } catch (err) {
    res.status(422).send(err.message);
  }
});

module.exports = router;
