const express = require('express');
const { register,authorize } = require('../../controllers/users');
const authenticateToken = require('../../middleware/authorizeToken')
const router = express();
router.post("/signup",register)
router.post("/authorize",authenticateToken,authorize)
module.exports = router;