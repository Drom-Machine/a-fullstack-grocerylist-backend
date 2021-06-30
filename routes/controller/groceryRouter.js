const express = require("express");
const router = express.Router();

const {
    getAllGroceries,
    createGrocery,
    updateGroceryByID,
    deleteGroceryByID,
} = require("./groceryController");


module.exports = router;