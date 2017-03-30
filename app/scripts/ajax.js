$(document).ready(function(){
	var pokeId = 0;

	function GetPokemon(pokemon){
		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + pokemon + '/', function(data){
			console.log('Name: ' + data.name);
			console.log('Id: ' + data.id);
			pokeId = data.id;

			$('#name').empty();
			$('#num').empty();
			$('#type').empty();
			$('#move').empty();
			$('#pokedexImage').empty();

			$('#name').html(Capitalize(data.name));
			$('#number').html(data.id);
			$('#pokedexImage').attr('src', data.sprites.front_default);
			$('#pokedexImage').attr('alt', data.name);


			$.each(data.types, function(i, item){
				console.log('Type ' + (i+1) + ': ' + data.types[i].type.name);
				$('#type').append(Capitalize(data.types[i].type.name) + '<br>');
			});

			var j = 0;
			$.each(data.moves, function(i, item){
				if(data.moves[i].version_group_details[0].move_learn_method.name == 'level-up' && j < 5){
					console.log('Move ' + (i+1) + ': ' + data.moves[i].move.name);
					$('#move').append(Capitalize(data.moves[i].move.name) + '<br>');
					j++;
				}
			});
		}).done(function() { 
			console.log('request successful'); 
		}).fail(function() { 
			console.log('request failed'); 
			$('.pokemon').empty();
			$('.pokemon').append('<h4 class=\'noResults\'>No results found</h4>');
		});
	}

	function Capitalize(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	$('#pokemonForm').on('submit', function(event){
		event.preventDefault();
		var pokemon = $(this).serialize();;
		GetPokemon(pokemon.substr(6));
	});

	$('#evolve').click(function(){
		GetPokemon(pokeId + 1);
	});

	$('#loading').hide();
	$('.pokemon').hide();

	$(document).ajaxStart(function(){
		$('#loading').show();
		$('.pokemon').hide();
	});

	$(document).ajaxStop(function(){
		$('#loading').hide();
		$('.pokemon').show();
	});
});