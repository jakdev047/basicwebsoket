const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({
        message: 'Welcome node.js'
    });
});

router.get('*',(req,res) => {
	res.status(404).json({
		error:  '404 Not Found'
    });
});

module.exports = router;
