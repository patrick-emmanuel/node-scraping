const express = require("express");
const router = express.Router();
const getResults = require("../scraper");

/* GET home page. */
router.get("/", function(req, res, next) {
  const result = getResults();
  console.log(result);
  res.render("index", { locations: result.locations });
});

module.exports = router;
