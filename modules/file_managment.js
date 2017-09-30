var fs = require('fs');
var express = require('express');

var router = express.Router();

router.get('/load/:name', function(request, response){

	fs.readFile("./files/"+request.params.name + '.txt', 'utf8', function(err, data){
		if(err){
			return response.json({err:err});
		}

		response.json({message:data});
	});
	
});


router.get('/save/:name/:data', function(request, response){
	fs.writeFile("./files/"+request.params.name + '.txt', request.params.data, function(err){
		if(err){
			return response.json({err:err});
		}

		response.json({message:"saved"});
	} )
});

module.exports = router;