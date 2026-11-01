const router = require("express").Router();
const auth = require("../Controllers/ContAuth");

router.post("/login", auth.login);
router.post("/inscription", auth.register);

module.exports = router;
