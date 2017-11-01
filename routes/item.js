var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'lx'
})
router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	var num = req.body.e
	pool.query(`SELECT * FROM list WHERE name LIKE '%${num}%' OR score LIKE '%${num}%'`,function(err,rows){
		res.send(rows)
	})
})
module.exports = router;