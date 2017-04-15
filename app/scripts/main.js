$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		keyboardScrolling: true,
		verticalCentered: false,
		anchors:['first', 'second', 'third']
	});

	location.replace('#first');

	$.fn.fullpage.setAllowScrolling(false);

	$('#pokeball').hover(function(){
		$(this).css('filter', 'brightness(.5)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
	   	$('#pokeballWobble').prop('volume', 1);
	    $('#pokeballWobble').on('play', function() {
	    	$('#pokeballWobble').animate({volume: .5}, 300);
	    });
	    wobble.play();
	},
    function(){
    	$(this).removeClass('animated bounceInDown');
        $(this).css('filter', 'brightness(1)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
		$('#pokeballWobble').animate({volume: 0}, 300);
		
		setTimeout(function(){
			wobble.pause();
			wobble.currentTime = 0;
	    }, 100);
    });

    $('#pokeball').click(function(){
		$('.first').css('opacity', '0');
		$('.first').css('transition', '1s');
		$('#pokeballWobble').animate({volume: 0}, 500);
		setTimeout(function(){
			var wobble = document.getElementById('pokeballWobble');
			wobble.pause();
			var pokeball = document.getElementById('pokeballOpen');
	    	pokeball.play();
	    	$('#pokeballWobble').animate({volume: .5}, 100);
	    }, 200);
		setTimeout(function(){
			$('.navbar').css('opacity', '1');
			$('.navbar').css('transition', '1s');
			$('.second, .third').css('display', 'block');
			$('.second, .third').css('transition', '1s');
			$('#pokeman').css('display', 'block');
			$('.welcome2').css('display', 'block');
			$('.welcome1').css('display', 'none');
			$('.first').css('opacity', '1');
			$('.first').css('transition', '3s');
			$('#pokeball').remove();
		}, 2000);
		setTimeout(function(){
			var background = document.getElementById('backgroundMusic');
			background.play();
			$('#backgroundMusic').animate({volume: .3}, 100);
			$.fn.fullpage.setAllowScrolling(true);
	    }, 3500);
	});

	$('#evolve1').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		$('#evolve1').fadeOut();

		setTimeout(function(){
			$('.element').show();
			$(function(){
				$('.element').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass img').css('transition', '3s');
	    	$('.fire img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire img').css('transition', '3s');
	    	$('.water img').css('filter', 'brightness(1) invert(0)');
	    	$('.water img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);
	    setTimeout(function(){
	    	$('.grass img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass img').addClass('animated');
			$('.grass img').addClass('tada');
			$('.fire img').addClass('animated');
			$('.fire img').addClass('tada');
			$('.water img').addClass('animated');
			$('.water img').addClass('tada');
	    }, 14500);
	    setTimeout(function(){
	    	$(function(){
				$('.element').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);
	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass img').removeClass('animated');
			$('.grass img').removeClass('tada');
			$('.fire img').removeClass('animated');
			$('.fire img').removeClass('tada');
			$('.water img').removeClass('animated');
			$('.water img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .3}, 1000);
	    }, 20000);
	    setTimeout(function(){
	    	$('.element').hide();
	    	$('#evolve1').fadeIn();
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve2').click(function(){
		var click = document.getElementById('click');
		click.play();
		$('#evolve2').fadeOut();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 300);
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 2000);
		
		$('h2').css('opacity', '0');
		$('h2').css('transition', '1s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '1s');
		$('.second').css('background-color', 'black');
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 9000);

	    setTimeout(function(){
	    	$('.grass2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass2 img').css('transition', '3s');
	    	$('.fire2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire2 img').css('transition', '3s');
	    	$('.water2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water2 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 11000);
	    setTimeout(function(){
	    	$('.grass2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass2 img').addClass('animated');
			$('.grass2 img').addClass('tada');
			$('.fire2 img').addClass('animated');
			$('.fire2 img').addClass('tada');
			$('.water2 img').addClass('animated');
			$('.water2 img').addClass('tada');
	    }, 13500);
	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass2 img').removeClass('animated');
			$('.grass2 img').removeClass('tada');
			$('.fire2 img').removeClass('animated');
			$('.fire2 img').removeClass('tada');
			$('.water2 img').removeClass('animated');
			$('.water2 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .3}, 1000);
	    }, 19000);
	    setTimeout(function(){
	    	$('#evolve2').fadeIn();
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    }, 20000);
	});
});