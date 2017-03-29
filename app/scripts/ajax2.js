$(document).ready(function(){
	var selected;
	
	$('#makeupForm').click(function(){
   		if($('#radio1').is(':checked')){ 
   			selected = $('#radio1').val();
   			console.log(selected);
   		}
   		else if($('#radio2').is(':checked')){ 
			selected = $('#radio2').val();
   			console.log(selected);
   		}
   		else if($('#radio3').is(':checked')){ 
   			selected = $('#radio3').val();
   			console.log(selected);
   		}
   		$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + selected, function(data){
			console.log(data[1].price);
			$('#makeup').attr('src', data[4].image_link);
			$('#desc').html(data[1].description);
		});	
	});
});