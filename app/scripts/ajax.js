$(document).ready(function(){
	var pokeId = 0;
	var evolve1 = 0;
	var evolve2 = 0;
	var evolve3 = 0;
	var evolve4 = 0;
	var evolve5 = 0;
	var evolve6 = 0;

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

	//Generation 3
	$.getJSON('http://pokeapi.co/api/v2/pokemon/252/', function(data){
		$('.grass3').empty();
		$('.grass3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/255/', function(data){
		$('.fire3').empty();
		$('.fire3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/258/', function(data){
		$('.water3').empty();
		$('.water3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 4
	$.getJSON('http://pokeapi.co/api/v2/pokemon/387/', function(data){
		$('.grass4').empty();
		$('.grass4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/390/', function(data){
		$('.fire4').empty();
		$('.fire4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/393/', function(data){
		$('.water4').empty();
		$('.water4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 5
	$.getJSON('http://pokeapi.co/api/v2/pokemon/495/', function(data){
		$('.grass5').empty();
		$('.grass5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/498/', function(data){
		$('.fire5').empty();
		$('.fire5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/501/', function(data){
		$('.water5').empty();
		$('.water5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 6
	$.getJSON('http://pokeapi.co/api/v2/pokemon/650/', function(data){
		$('.grass6').empty();
		$('.grass6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/653/', function(data){
		$('.fire6').empty();
		$('.fire6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/656/', function(data){
		$('.water6').empty();
		$('.water6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	function Evolve(id){
		setTimeout(function(){
			$('.grass img').css('filter', 'brightness(0) invert(1)');
			$('.fire img').css('filter', 'brightness(0) invert(1)');
			$('.water img').css('filter', 'brightness(0) invert(1)');
			$('.grass img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

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
		}, 3000);
		evolve1++;
	}

	function Evolve2(id){
		setTimeout(function(){
			$('.grass2 img').css('filter', 'brightness(0) invert(1)');
			$('.fire2 img').css('filter', 'brightness(0) invert(1)');
			$('.water2 img').css('filter', 'brightness(0) invert(1)');
			$('.grass2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

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
		}, 3000);
		evolve2++;
	}

	function Evolve3(id){
		setTimeout(function(){
			$('.grass3 img').css('filter', 'brightness(0) invert(1)');
			$('.fire3 img').css('filter', 'brightness(0) invert(1)');
			$('.water3 img').css('filter', 'brightness(0) invert(1)');
			$('.grass3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
				$('#treecko h3').empty();
				$('#treecko h3').html(Capitalize(data.name));
				$('.grass3').empty();
				$('.grass3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass3 img').css('filter', 'brightness(0) invert(1)');
				$('.grass3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
				$('#torchic h3').empty();
				$('#torchic h3').html(Capitalize(data.name));
				$('.fire3').empty();
				$('.fire3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire3 img').css('filter', 'brightness(0) invert(1)');
				$('.fire3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
				$('#mudkip h3').empty();
				$('#mudkip h3').html(Capitalize(data.name));
				$('.water3').empty();
				$('.water3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water3 img').css('filter', 'brightness(0) invert(1)');
				$('.water3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve3++;
	}

	function Evolve4(id){
		setTimeout(function(){
			$('.grass4 img').css('filter', 'brightness(0) invert(1)');
			$('.fire4 img').css('filter', 'brightness(0) invert(1)');
			$('.water4 img').css('filter', 'brightness(0) invert(1)');
			$('.grass4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
				$('#turtwig h3').empty();
				$('#turtwig h3').html(Capitalize(data.name));
				$('.grass4').empty();
				$('.grass4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass4 img').css('filter', 'brightness(0) invert(1)');
				$('.grass4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
				$('#chimchar h3').empty();
				$('#chimchar h3').html(Capitalize(data.name));
				$('.fire4').empty();
				$('.fire4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire4 img').css('filter', 'brightness(0) invert(1)');
				$('.fire4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
				$('#piplup h3').empty();
				$('#piplup h3').html(Capitalize(data.name));
				$('.water4').empty();
				$('.water4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water4 img').css('filter', 'brightness(0) invert(1)');
				$('.water4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve4++;
	}

	function Evolve5(id){
		setTimeout(function(){
			$('.grass5 img').css('filter', 'brightness(0) invert(1)');
			$('.fire5 img').css('filter', 'brightness(0) invert(1)');
			$('.water5 img').css('filter', 'brightness(0) invert(1)');
			$('.grass5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
				$('#snivy h3').empty();
				$('#snivy h3').html(Capitalize(data.name));
				$('.grass5').empty();
				$('.grass5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass5 img').css('filter', 'brightness(0) invert(1)');
				$('.grass5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
				$('#tepig h3').empty();
				$('#tepig h3').html(Capitalize(data.name));
				$('.fire5').empty();
				$('.fire5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire5 img').css('filter', 'brightness(0) invert(1)');
				$('.fire5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
				$('#oshawott h3').empty();
				$('#oshawott h3').html(Capitalize(data.name));
				$('.water5').empty();
				$('.water5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water5 img').css('filter', 'brightness(0) invert(1)');
				$('.water5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve5++;
	}

	function Evolve6(id){
		setTimeout(function(){
			$('.grass6 img').css('filter', 'brightness(0) invert(1)');
			$('.fire6 img').css('filter', 'brightness(0) invert(1)');
			$('.water6 img').css('filter', 'brightness(0) invert(1)');
			$('.grass6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function(data){
				$('#chespin h3').empty();
				$('#chespin h3').html(Capitalize(data.name));
				$('.grass6').empty();
				$('.grass6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass6 img').css('filter', 'brightness(0) invert(1)');
				$('.grass6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function(data){
				$('#fennekin h3').empty();
				$('#fennekin h3').html(Capitalize(data.name));
				$('.fire6').empty();
				$('.fire6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire6 img').css('filter', 'brightness(0) invert(1)');
				$('.fire6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function(data){
				$('#froakie h3').empty();
				$('#froakie h3').html(Capitalize(data.name));
				$('.water6').empty();
				$('.water6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water6 img').css('filter', 'brightness(0) invert(1)');
				$('.water6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve6++;
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

	//Random
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

	$('#evolve3').click(function(){
		var id = parseInt($('#treecko h3').attr('class'));
		$('#treecko h3').attr('class', id + 1) ;
		console.log(id);
		Evolve3(id + 1);
		if(evolve3 == 2){
			$('#evolve3').remove();
		}
	});

	$('#evolve4').click(function(){
		var id = parseInt($('#turtwig h3').attr('class'));
		$('#turtwig h3').attr('class', id + 1) ;
		console.log(id);
		Evolve4(id + 1);
		if(evolve4 == 2){
			$('#evolve4').remove();
		}
	});

	$('#evolve5').click(function(){
		var id = parseInt($('#snivy h3').attr('class'));
		$('#snivy h3').attr('class', id + 1) ;
		console.log(id);
		Evolve5(id + 1);
		if(evolve5 == 2){
			$('#evolve5').remove();
		}
	});

	$('#evolve6').click(function(){
		var id = parseInt($('#chespin h3').attr('class'));
		$('#chespin h3').attr('class', id + 1) ;
		console.log(id);
		Evolve6(id + 1);
		if(evolve6 == 2){
			$('#evolve6').remove();
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