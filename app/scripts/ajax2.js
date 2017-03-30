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
      else if($('#radio4').is(':checked')){ 
         selected = $('#radio4').val();
         console.log(selected);
      }
      else if($('#radio5').is(':checked')){ 
         selected = $('#radio5').val();
         console.log(selected);
      }
   	/*$.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + selected, function(data){
   	   console.log(data[1].price);
   	   $('#makeup').attr('src', data[4].image_link);
   	   $('#desc').html(data[1].description);
      });*/

      $.getJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + selected, function(data){
         $("#eye").empty();
         $.each(data, function(i, item){
            if(data[i].price > '70'){
               console.log(data[i].name);
               /*$('#move').append(Capitalize(data.moves[i].move.name) + '<br>');*/
               $("#eye").append(data[i].name + "<br>");
               $('#product').attr('src', data[1].image_link);
            }
         });
      });   	
	});

   $("#joker").click(function(){
      $.getJSON('http://api.icndb.com/jokes/random', function(data){
         console.log(data.value.joke);
         $("#joke").empty();
         $("#joke").append(data.value.joke + "<br>");
      });
   });
});