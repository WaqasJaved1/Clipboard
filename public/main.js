$("#load").click(function () {

	var path = "/file/load/"+ $('#name').val();
	console.log(path);
	$.get(path , function(data, status){
		// console.log(data);
		if(data.err){
			alert("File Not Exists");
		}else{
			$('#text').val(data.message);
		}
	})
});


$("#save").click(function () {

	var path = "/file/save/"+ $('#name').val()+'/'+ $('#text').val();
	console.log(path);
	$.get(path , function(data, status){
		console.log(data);
	})
});