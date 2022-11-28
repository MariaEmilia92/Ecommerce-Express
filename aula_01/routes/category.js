const express = require("express");
const router = express.Router();

const Jwt = require("../utils/Jwt");
const CategoryController = require('../controllers/CategoryController');

const categoryCtrl = new CategoryController();
const jwt = new Jwt();

router.get("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await categoryCtrl.getCategories(req.query);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

router.get("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await categoryCtrl.getCategory(req.params.id);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

router.post("/", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await categoryCtrl.createCategory(req.body);
  }
  res.statusCode = result.status;
  res.send(result.result);
});


router.patch("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await categoryCtrl.updateCategory(req.params.id, req.body);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

router.delete("/:id", async (req, res) => {
  let result = jwt.verifyToken(req.headers.authorization);
  if(result.status === 200){
    result = await categoryCtrl.deleteCategory(req.params.id);
  }
  res.statusCode = result.status;
  res.send(result.result);
});

module.exports = router;