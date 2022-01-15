const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.get('*',(req,res) => {
	res.status(404).json({
		error:  '404 Not Found'
    });
});

module.exports = router;
