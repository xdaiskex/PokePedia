$(document).ready(function(){
	var pokeId = 0;
	var evolve1 = 0;
	var evolve2 = 0;
	var evolve3 = 0;

	//Generation 1
	$.getJSON('http://pokeapi.co/api/v2/pokemon/1/', function(data){
		$('.grass').empty();
		$('.grass').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/4/', function(data){
		$('.fire').empty();
		$('.fire').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/7/', function(data){
		$('.water').empty();
		$('.water').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 2
	$.getJSON('http://pokeapi.co/api/v2/pokemon/152/', function(data){
		$('.grass2').empty();
		$('.grass2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/155/', function(data){
		$('.fire2').empty();
		$('.fire2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/158/', function(data){
		$('.water2').empty();
		$('.water2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	function Evolve(id){
		$('.grass img').css('filter', 'brightness(0) invert(1)');
		$('.fire img').css('filter', 'brightness(0) invert(1)');
		$('.water img').css('filter', 'brightness(0) invert(1)');
		$('.grass img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		$('.fire img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		$('.water img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		/*$('.second').delay("slow").css('opacity', 0);
		$('.second').css('transition', '1s');*/

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
			$('#bulbasaur h3').empty();
			$('#bulbasaur h3').html(Capitalize(data.name));
			$('.grass').empty();
			$('.grass').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.grass img').css('filter', 'brightness(0) invert(1)');
			$('.grass img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
			$('#charmander h3').empty();
			$('#charmander h3').html(Capitalize(data.name));
			$('.fire').empty();
			$('.fire').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.fire img').css('filter', 'brightness(0) invert(1)');
			$('.fire img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
			$('#squirtle h3').empty();
			$('#squirtle h3').html(Capitalize(data.name));
			$('.water').empty();
			$('.water').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.water img').css('filter', 'brightness(0) invert(1)');
			$('.water img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		evolve1++;
	}

	function Evolve2(id){
		$('.grass2 img').css('filter', 'brightness(0) invert(1)');
		$('.fire2 img').css('filter', 'brightness(0) invert(1)');
		$('.water2 img').css('filter', 'brightness(0) invert(1)');
		$('.grass2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		$('.fire2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		$('.water2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300);
		/*$('.second').delay("slow").css('opacity', 0);
		$('.second').css('transition', '1s');*/

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
			$('#chikorita h3').empty();
			$('#chikorita h3').html(Capitalize(data.name));
			$('.grass2').empty();
			$('.grass2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.grass2 img').css('filter', 'brightness(0) invert(1)');
			$('.grass2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
			$('#cyndaquil h3').empty();
			$('#cyndaquil h3').html(Capitalize(data.name));
			$('.fire2').empty();
			$('.fire2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.fire2 img').css('filter', 'brightness(0) invert(1)');
			$('.fire2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
			$('#totodile h3').empty();
			$('#totodile h3').html(Capitalize(data.name));
			$('.water2').empty();
			$('.water2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
			$('.water2 img').css('filter', 'brightness(0) invert(1)');
			$('.water2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		});

		evolve2++;
	}

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
				if(data.moves[i].version_group_details[0].move_learn_method.name == 'level-up' && j < 4){
					console.log('Move ' + (i+1) + ': ' + data.moves[i].move.name);
					$('#move').append(Capitalize(data.moves[i].move.name) + '<br>');
					j++;
				}
			});
		}).done(function() { 
			$('.error').hide();
			$('.pokemon').show();
			console.log('request successful'); 
		}).fail(function() { 
			console.log('request failed'); 
			$('.pokemon').hide();
			$('.error').show();
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

	/*$('#evolve').click(function(){
		GetPokemon(pokeId + 1);
	});*/

	$('#evolve1').click(function(){
		var id = parseInt($('#bulbasaur h3').attr('class'));
		$('#bulbasaur h3').attr('class', id + 1) ;
		console.log(id);
		Evolve(id + 1);
		if(evolve1 == 2){
			$('#evolve1').remove();
		}
	});

	$('#evolve2').click(function(){
		var id = parseInt($('#chikorita h3').attr('class'));
		$('#chikorita h3').attr('class', id + 1) ;
		console.log(id);
		Evolve2(id + 1);
		if(evolve2 == 2){
			$('#evolve2').remove();
		}
	});

	$('#loading').hide();
	$('.pokemon').hide();

	$(document).ajaxStart(function(){
		$('#loading').show();
		$('.pokemon').hide();
		$('.error').hide();
	});

	$(document).ajaxStop(function(){
		$('#loading').hide();
	});
});