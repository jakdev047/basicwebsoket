const express = require('express');
const router = express.Router();
const path = require("path");

// router.get('/',(req,res) => {
//     // res.sendFile(__dirname + '/views/index.html');
//     res.sendFile(__dirname + '/views/index.html');
// });

router.get('*',(req,res) => {
	// res.status(404).json({
	// 	error:  '404 Not Found'
    // });
    
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});

module.exports = router;
