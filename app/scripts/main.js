$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		keyboardScrolling: true,
		verticalCentered: false,
		anchors:['first', 'second', 'third']
	});

	$('#pokeball').hover(function(){
		$(this).css('filter', 'brightness(.5)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
	   	$('#pokeballWobble').prop('volume', 1);
	    $('#pokeballWobble').on('play', function() {
	    	$('#pokeballWobble').animate({volume: 1}, 300);
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
			$('#backgroundMusic').animate({volume: .2}, 100);
	    }, 3500);
	});

	$('#evolve1').click(function(){
		$('#evolve1').hide();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 300);
		var evolve = document.getElementById('evolveMusic');
		evolve.play();
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 7000);

	    setTimeout(function(){
	    	$('.grass img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass img').css('transition', '3s');
	    	$('.fire img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire img').css('transition', '3s');
	    	$('.water img').css('filter', 'brightness(1) invert(0)');
	    	$('.water img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 9000);
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
	    }, 11500);
	    setTimeout(function(){
	    	$('.grass img').removeClass('animated');
			$('.grass img').removeClass('tada');
			$('.fire img').removeClass('animated');
			$('.fire img').removeClass('tada');
			$('.water img').removeClass('animated');
			$('.water img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 17000);
	    setTimeout(function(){
	    	$('#evolve1').show();
	    }, 18000);
	});

	$('#evolve2').click(function(){
		$('#evolve2').hide();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 300);
		var evolve = document.getElementById('evolveMusic');
		evolve.play();
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 7000);

	    setTimeout(function(){
	    	$('.grass2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass2 img').css('transition', '3s');
	    	$('.fire2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire2 img').css('transition', '3s');
	    	$('.water2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water2 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 9000);
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
	    }, 11500);
	    setTimeout(function(){
	    	$('.grass2 img').removeClass('animated');
			$('.grass2 img').removeClass('tada');
			$('.fire2 img').removeClass('animated');
			$('.fire2 img').removeClass('tada');
			$('.water2 img').removeClass('animated');
			$('.water2 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 17000);
	    setTimeout(function(){
	    	$('#evolve2').show();
	    }, 18000);
	});
});