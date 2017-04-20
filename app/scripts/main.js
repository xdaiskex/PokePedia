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
	   	wobble.volume = .5;
	    wobble.play();
	},
    function(){
    	$(this).removeClass('animated bounceInDown');
        $(this).css('filter', 'brightness(1)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
		wobble.pause();
		wobble.currentTime = 0;
    });

    $('#pokeball').click(function(){
		$('.first').css('opacity', '0');
		$('.first').css('transition', '1s');
		$('#pokeballWobble').animate({volume: 0}, 500);

		setTimeout(function(){
			var wobble = document.getElementById('pokeballWobble');
			wobble.remove();
			var pokeball = document.getElementById('pokeballOpen');
			pokeball.volume = .2;
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
			background.volume = .2;
			$.fn.fullpage.setAllowScrolling(true);
	    }, 3400);
	});

	$('#evolve1').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element').css('color', 'black');
		$('.element').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element').show();
			$('.element').css('color', 'white');
			$('.element').css('transition', '2s');
			$(function(){
				$('.element').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
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
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve2').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element2').css('color', 'black');
		$('.element2').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element2').show();
			$('.element2').css('color', 'white');
			$('.element2').css('transition', '2s');
			$(function(){
				$('.element2').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass2 img').css('transition', '3s');
	    	$('.fire2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire2 img').css('transition', '3s');
	    	$('.water2 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water2 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

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
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element2').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass2 img').removeClass('animated');
			$('.grass2 img').removeClass('tada');
			$('.fire2 img').removeClass('animated');
			$('.fire2 img').removeClass('tada');
			$('.water2 img').removeClass('animated');
			$('.water2 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element2').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve3').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element3').css('color', 'black');
		$('.element3').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element3').show();
			$('.element3').css('color', 'white');
			$('.element3').css('transition', '2s');
			$(function(){
				$('.element3').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass3 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass3 img').css('transition', '3s');
	    	$('.fire3 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire3 img').css('transition', '3s');
	    	$('.water3 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water3 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

	    setTimeout(function(){
	    	$('.grass3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass3 img').addClass('animated');
			$('.grass3 img').addClass('tada');
			$('.fire3 img').addClass('animated');
			$('.fire3 img').addClass('tada');
			$('.water3 img').addClass('animated');
			$('.water3 img').addClass('tada');
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element3').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass3 img').removeClass('animated');
			$('.grass3 img').removeClass('tada');
			$('.fire3 img').removeClass('animated');
			$('.fire3 img').removeClass('tada');
			$('.water3 img').removeClass('animated');
			$('.water3 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element3').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve4').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element4').css('color', 'black');
		$('.element4').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element4').show();
			$('.element4').css('color', 'white');
			$('.element4').css('transition', '2s');
			$(function(){
				$('.element4').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass4 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass4 img').css('transition', '3s');
	    	$('.fire4 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire4 img').css('transition', '3s');
	    	$('.water4 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water4 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

	    setTimeout(function(){
	    	$('.grass4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass4 img').addClass('animated');
			$('.grass4 img').addClass('tada');
			$('.fire4 img').addClass('animated');
			$('.fire4 img').addClass('tada');
			$('.water4 img').addClass('animated');
			$('.water4 img').addClass('tada');
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element4').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass4 img').removeClass('animated');
			$('.grass4 img').removeClass('tada');
			$('.fire4 img').removeClass('animated');
			$('.fire4 img').removeClass('tada');
			$('.water4 img').removeClass('animated');
			$('.water4 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element4').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve5').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element5').css('color', 'black');
		$('.element5').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element5').show();
			$('.element5').css('color', 'white');
			$('.element5').css('transition', '2s');
			$(function(){
				$('.element5').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass5 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass5 img').css('transition', '3s');
	    	$('.fire5 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire5 img').css('transition', '3s');
	    	$('.water5 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water5 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

	    setTimeout(function(){
	    	$('.grass5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass5 img').addClass('animated');
			$('.grass5 img').addClass('tada');
			$('.fire5 img').addClass('animated');
			$('.fire5 img').addClass('tada');
			$('.water5 img').addClass('animated');
			$('.water5 img').addClass('tada');
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element5').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass5 img').removeClass('animated');
			$('.grass5 img').removeClass('tada');
			$('.fire5 img').removeClass('animated');
			$('.fire5 img').removeClass('tada');
			$('.water5 img').removeClass('animated');
			$('.water5 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element5').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve6').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element6').css('color', 'black');
		$('.element6').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element6').show();
			$('.element6').css('color', 'white');
			$('.element6').css('transition', '2s');
			$(function(){
				$('.element6').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass6 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass6 img').css('transition', '3s');
	    	$('.fire6 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire6 img').css('transition', '3s');
	    	$('.water6 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water6 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

	    setTimeout(function(){
	    	$('.grass6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass6 img').addClass('animated');
			$('.grass6 img').addClass('tada');
			$('.fire6 img').addClass('animated');
			$('.fire6 img').addClass('tada');
			$('.water6 img').addClass('animated');
			$('.water6 img').addClass('tada');
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element6').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass6 img').removeClass('animated');
			$('.grass6 img').removeClass('tada');
			$('.fire6 img').removeClass('animated');
			$('.fire6 img').removeClass('tada');
			$('.water6 img').removeClass('animated');
			$('.water6 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element6').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});

	$('#evolve7').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({volume: 0}, 1500);
		$('.element7').css('color', 'black');
		$('.element7').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function(){
			$('.element7').show();
			$('.element7').css('color', 'white');
			$('.element7').css('transition', '2s');
			$(function(){
				$('.element7').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);
		
		setTimeout(function(){
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);
		
		setTimeout(function(){
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
	    }, 10000);

	    setTimeout(function(){
	    	$('.grass7 img').css('filter', 'brightness(1) invert(0)');
	    	$('.grass7 img').css('transition', '3s');
	    	$('.fire7 img').css('filter', 'brightness(1) invert(0)');
	    	$('.fire7 img').css('transition', '3s');
	    	$('.water7 img').css('filter', 'brightness(1) invert(0)');
	    	$('.water7 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
	    }, 12000);

	    setTimeout(function(){
	    	$('.grass7 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.fire7 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
	    	$('.water7 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass7 img').addClass('animated');
			$('.grass7 img').addClass('tada');
			$('.fire7 img').addClass('animated');
			$('.fire7 img').addClass('tada');
			$('.water7 img').addClass('animated');
			$('.water7 img').addClass('tada');
	    }, 14500);

	    setTimeout(function(){
	    	$(function(){
				$('.element7').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
	    }, 16000);

	    setTimeout(function(){
	    	$('.second').css('background-color', 'white');
	    	$('.grass7 img').removeClass('animated');
			$('.grass7 img').removeClass('tada');
			$('.fire7 img').removeClass('animated');
			$('.fire7 img').removeClass('tada');
			$('.water7 img').removeClass('animated');
			$('.water7 img').removeClass('tada');
			$('#backgroundMusic').animate({volume: .2}, 1000);
	    }, 20000);

	    setTimeout(function(){
	    	$('.element7').hide();
	    	$('.evolveBtn').fadeIn(1000);
	    	$('h2').css('opacity', '1');
	    	$('h3').css('opacity', '1');
	    	$.fn.fullpage.setAllowScrolling(true);
	    }, 21000);
	});
});