const express = require("express");
const authHandler = require("../handler/auth.handler");
const router = express.Router();
// Auth Routes
router.get("/", authHandler.defaultRoot)
router.post("/register", authHandler.register)
router.post("/login", authHandler.login)

module.exports = {
    routes: router,
}