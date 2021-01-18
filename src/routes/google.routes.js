const{ Router} = require('express');
const router = Router();

const { getLogs } = require('../controllers/google.controller');

router.get('/', getLogs);
module.exports = router;
