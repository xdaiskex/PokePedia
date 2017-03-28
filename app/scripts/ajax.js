$(document).ready(function(){
	function GetPokemon(pokemon){
		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + pokemon + '/', function(data){
			console.log("Name: " + data.name);
			$("#name").empty();
			$("#type").empty();
			$("#move").empty();
			$("#name").html(data.name);

			$.each(data.types, function(i, item){
				console.log("Type " + (i+1) + ": " + data.types[i].type.name);
				/*var types = {};
				var types[i] = data.types[i].type.name;
				$("#type").html(types);*/
				$("#type").append(data.types[i].type.name);
			});

			$.each(data.moves, function(i, item){
				if(data.moves[i].version_group_details[0].move_learn_method.name == "level-up"){
					console.log("Move " + (i+1) + ": " + data.moves[i].move.name);
					$("#move").append(data.moves[i].move.name);
				}
			});
		});
	}

	$("#pokemonForm").on('submit', function(event){
		event.preventDefault();
		var pokemon = $(this).serialize();
		//console.log(pokemon.substr(6));
		GetPokemon(pokemon.substr(6));
	});
});