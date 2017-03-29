$(document).ready(function(){
	var pokeId = 0;

	function GetPokemon(pokemon){
		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + pokemon + '/', function(data){
			console.log("Name: " + data.name);
			console.log("Id: " + data.id);
			pokeId = data.id;

			$("#name").empty();
			$("#num").empty();
			$("#type").empty();
			$("#move").empty();

			$("#name").html(data.name);
			$("#number").html(data.id);

			$.each(data.types, function(i, item){
				console.log("Type " + (i+1) + ": " + data.types[i].type.name);
				$("#type").append(data.types[i].type.name + "<br>");
			});

			$.each(data.moves, function(i, item){
				if(data.moves[i].version_group_details[0].move_learn_method.name == "level-up"){
					console.log("Move " + (i+1) + ": " + data.moves[i].move.name);
					$("#move").append(data.moves[i].move.name + "<br>");
				}
			});
		});
	}

	function Evolve(pokemon){
		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + pokemon + '/', function(data){
			console.log("Name: " + data.name);
			console.log("Id: " + data.id);
			pokeId = data.id;

			$("#name").empty();
			$("#num").empty();
			$("#type").empty();
			$("#move").empty();

			$("#name").html(data.name);
			$("#number").html(data.id);

			$.each(data.types, function(i, item){
				console.log("Type " + (i+1) + ": " + data.types[i].type.name);
				$("#type").append(data.types[i].type.name + "<br>");
			});

			$.each(data.moves, function(i, item){
				if(data.moves[i].version_group_details[0].move_learn_method.name == "level-up"){
					console.log("Move " + (i+1) + ": " + data.moves[i].move.name);
					$("#move").append(data.moves[i].move.name + "<br>");
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

	$("#evolve").click(function(){
		Evolve(pokeId + 1);
	});
});