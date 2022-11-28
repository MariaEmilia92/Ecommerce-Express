const express = require("express");
const router = express.Router();
const User = require('../controllers/UserController');
const Jwt = require("../utils/Jwt");

const userCtrl = new User();
const jwt = new Jwt();

router.get("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await userCtrl.getUsers(req.query);
  }

  res.statusCode = result.status;
  res.send(result.result);
});

router.get("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await userCtrl.getUser(req.params.id);
  }

  res.statusCode = result.status;
  res.send(result.result);
});


router.post("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await userCtrl.createUser(req.body);
  }

  res.statusCode = result.status;
  res.send(result.result);
});


router.patch("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await userCtrl.updateUser(req.params.id, req.body);
  }

  res.statusCode = result.status;
  res.send(result.result);
});

router.delete("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await userCtrl.deleteUser(req.params.id);
  }

  res.statusCode = result.status;
  res.send(result.result);
});



module.exports = router;