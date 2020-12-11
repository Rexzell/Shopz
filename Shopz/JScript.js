const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	
	burger.addEventListener("click", () => {
		//Toggle Map
		nav.classList.toggle("nav-active");
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = "";
			}
			else{
				link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		//Burger Animation
		burger.classList.toggle("toggle");
	});
}

//Magic Borders Code
document.querySelector('.content').onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}

navSlide();

//Swiper Code
var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 8,
        modifier: 1,
        slideShadows: true,
      },
	  
pagination: {
       el: '.swiper-pagination',
  },
});

//Card Flip Shop Section
var cardNovel1 = document.querySelector('.shopCardNovel1');
cardNovel1.addEventListener( 'click', function() {
cardNovel1.classList.toggle('is-flipped');
});

var cardNovel2 = document.querySelector('.shopCardNovel2');
cardNovel2.addEventListener( 'click', function() {
cardNovel2.classList.toggle('is-flipped');
});

var cardNovel3 = document.querySelector('.shopCardNovel3');
cardNovel3.addEventListener( 'click', function() {
cardNovel3.classList.toggle('is-flipped');
});

var cardNovel4 = document.querySelector('.shopCardNovel4');
cardNovel4.addEventListener( 'click', function() {
cardNovel4.classList.toggle('is-flipped');
});

var cardNovel5 = document.querySelector('.shopCardNovel5');
cardNovel5.addEventListener( 'click', function() {
cardNovel5.classList.toggle('is-flipped');
});

var cardNovel6 = document.querySelector('.shopCardNovel6');
cardNovel6.addEventListener( 'click', function() {
cardNovel6.classList.toggle('is-flipped');
});

var cardNovel7 = document.querySelector('.shopCardNovel7');
cardNovel7.addEventListener( 'click', function() {
cardNovel7.classList.toggle('is-flipped');
});

var cardNovel8 = document.querySelector('.shopCardNovel8');
cardNovel8.addEventListener( 'click', function() {
cardNovel8.classList.toggle('is-flipped');
});

var cardNovel9 = document.querySelector('.shopCardNovel9');
cardNovel9.addEventListener( 'click', function() {
cardNovel9.classList.toggle('is-flipped');
});

var cardNovel10 = document.querySelector('.shopCardNovel10');
cardNovel10.addEventListener( 'click', function() {
cardNovel10.classList.toggle('is-flipped');
});

var cardFurniture1 = document.querySelector('.shopCardFurniture1');
cardFurniture1.addEventListener( 'click', function() {
cardFurniture1.classList.toggle('is-flipped');
});

var cardFurniture2 = document.querySelector('.shopCardFurniture2');
cardFurniture2.addEventListener( 'click', function() {
cardFurniture2.classList.toggle('is-flipped');
});

var cardFurniture3 = document.querySelector('.shopCardFurniture3');
cardFurniture3.addEventListener( 'click', function() {
cardFurniture3.classList.toggle('is-flipped');
});

var cardFurniture4 = document.querySelector('.shopCardFurniture4');
cardFurniture4.addEventListener( 'click', function() {
cardFurniture4.classList.toggle('is-flipped');
});

var cardFurniture5 = document.querySelector('.shopCardFurniture5');
cardFurniture5.addEventListener( 'click', function() {
cardFurniture5.classList.toggle('is-flipped');
});

var cardFurniture6 = document.querySelector('.shopCardFurniture6');
cardFurniture6.addEventListener( 'click', function() {
cardFurniture6.classList.toggle('is-flipped');
});

var cardFurniture7 = document.querySelector('.shopCardFurniture7');
cardFurniture7.addEventListener( 'click', function() {
cardFurniture7.classList.toggle('is-flipped');
});

var cardFurniture8 = document.querySelector('.shopCardFurniture8');
cardFurniture8.addEventListener( 'click', function() {
cardFurniture8.classList.toggle('is-flipped');
});

var cardFurniture9 = document.querySelector('.shopCardFurniture9');
cardFurniture9.addEventListener( 'click', function() {
cardFurniture9.classList.toggle('is-flipped');
});

var cardFurniture10 = document.querySelector('.shopCardFurniture10');
cardFurniture10.addEventListener( 'click', function() {
cardFurniture10.classList.toggle('is-flipped');
});

var cardAppliances1 = document.querySelector('.shopCardAppliances1');
cardAppliances1.addEventListener( 'click', function() {
cardAppliances1.classList.toggle('is-flipped');
});

var cardAppliances2 = document.querySelector('.shopCardAppliances2');
cardAppliances2.addEventListener( 'click', function() {
cardAppliances2.classList.toggle('is-flipped');
});

var cardAppliances3 = document.querySelector('.shopCardAppliances3');
cardAppliances3.addEventListener( 'click', function() {
cardAppliances3.classList.toggle('is-flipped');
});

var cardAppliances4 = document.querySelector('.shopCardAppliances4');
cardAppliances4.addEventListener( 'click', function() {
cardAppliances4.classList.toggle('is-flipped');
});

var cardAppliances5 = document.querySelector('.shopCardAppliances5');
cardAppliances5.addEventListener( 'click', function() {
cardAppliances5.classList.toggle('is-flipped');
});

var cardAppliances6 = document.querySelector('.shopCardAppliances6');
cardAppliances6.addEventListener( 'click', function() {
cardAppliances6.classList.toggle('is-flipped');
});

var cardAppliances7 = document.querySelector('.shopCardAppliances7');
cardAppliances7.addEventListener( 'click', function() {
cardAppliances7.classList.toggle('is-flipped');
});

var cardAppliances8 = document.querySelector('.shopCardAppliances8');
cardAppliances8.addEventListener( 'click', function() {
cardAppliances8.classList.toggle('is-flipped');
});

var cardAppliances9 = document.querySelector('.shopCardAppliances9');
cardAppliances9.addEventListener( 'click', function() {
cardAppliances9.classList.toggle('is-flipped');
});

var cardAppliances10 = document.querySelector('.shopCardAppliances10');
cardAppliances10.addEventListener( 'click', function() {
cardAppliances10.classList.toggle('is-flipped');
});

var cardFV1 = document.querySelector('.shopCardFV1');
cardFV1.addEventListener( 'click', function() {
cardFV1.classList.toggle('is-flipped');
});

var cardFV2 = document.querySelector('.shopCardFV2');
cardFV2.addEventListener( 'click', function() {
cardFV2.classList.toggle('is-flipped');
});

var cardFV3 = document.querySelector('.shopCardFV3');
cardFV3.addEventListener( 'click', function() {
cardFV3.classList.toggle('is-flipped');
});

var cardFV4 = document.querySelector('.shopCardFV4');
cardFV4.addEventListener( 'click', function() {
cardFV4.classList.toggle('is-flipped');
});

var cardFV5 = document.querySelector('.shopCardFV5');
cardFV5.addEventListener( 'click', function() {
cardFV5.classList.toggle('is-flipped');
});

var cardFV6 = document.querySelector('.shopCardFV6');
cardFV6.addEventListener( 'click', function() {
cardFV6.classList.toggle('is-flipped');
});

var cardFV7 = document.querySelector('.shopCardFV7');
cardFV7.addEventListener( 'click', function() {
cardFV7.classList.toggle('is-flipped');
});

var cardFV8 = document.querySelector('.shopCardFV8');
cardFV8.addEventListener( 'click', function() {
cardFV8.classList.toggle('is-flipped');
});

var cardFV9 = document.querySelector('.shopCardFV9');
cardFV9.addEventListener( 'click', function() {
cardFV9.classList.toggle('is-flipped');
});

var cardFV10 = document.querySelector('.shopCardFV10');
cardFV10.addEventListener( 'click', function() {
cardFV10.classList.toggle('is-flipped');
});

var cardVG1 = document.querySelector('.shopCardVG1');
cardVG1.addEventListener( 'click', function() {
cardVG1.classList.toggle('is-flipped');
});

var cardVG2 = document.querySelector('.shopCardVG2');
cardVG2.addEventListener( 'click', function() {
cardVG2.classList.toggle('is-flipped');
});

var cardVG3 = document.querySelector('.shopCardVG3');
cardVG3.addEventListener( 'click', function() {
cardVG3.classList.toggle('is-flipped');
});

var cardVG4 = document.querySelector('.shopCardVG4');
cardVG4.addEventListener( 'click', function() {
cardVG4.classList.toggle('is-flipped');
});

var cardVG5 = document.querySelector('.shopCardVG5');
cardVG5.addEventListener( 'click', function() {
cardVG5.classList.toggle('is-flipped');
});

var cardVG6 = document.querySelector('.shopCardVG6');
cardVG6.addEventListener( 'click', function() {
cardVG6.classList.toggle('is-flipped');
});

var cardVG7 = document.querySelector('.shopCardVG7');
cardVG7.addEventListener( 'click', function() {
cardVG7.classList.toggle('is-flipped');
});

var cardVG8 = document.querySelector('.shopCardVG8');
cardVG8.addEventListener( 'click', function() {
cardVG8.classList.toggle('is-flipped');
});

var cardVG9 = document.querySelector('.shopCardVG9');
cardVG9.addEventListener( 'click', function() {
cardVG9.classList.toggle('is-flipped');
});

var cardVG10 = document.querySelector('.shopCardVG10');
cardVG10.addEventListener( 'click', function() {
cardVG10.classList.toggle('is-flipped');
});

var cardGadget1 = document.querySelector('.shopCardGadget1');
cardGadget1.addEventListener( 'click', function() {
cardGadget1.classList.toggle('is-flipped');
});

var cardGadget2 = document.querySelector('.shopCardGadget2');
cardGadget2.addEventListener( 'click', function() {
cardGadget2.classList.toggle('is-flipped');
});

var cardGadget3 = document.querySelector('.shopCardGadget3');
cardGadget3.addEventListener( 'click', function() {
cardGadget3.classList.toggle('is-flipped');
});

var cardGadget4 = document.querySelector('.shopCardGadget4');
cardGadget4.addEventListener( 'click', function() {
cardGadget4.classList.toggle('is-flipped');
});

var cardGadget5 = document.querySelector('.shopCardGadget5');
cardGadget5.addEventListener( 'click', function() {
cardGadget5.classList.toggle('is-flipped');
});

var cardGadget6 = document.querySelector('.shopCardGadget6');
cardGadget6.addEventListener( 'click', function() {
cardGadget6.classList.toggle('is-flipped');
});

var cardGadget7 = document.querySelector('.shopCardGadget7');
cardGadget7.addEventListener( 'click', function() {
cardGadget7.classList.toggle('is-flipped');
});

var cardGadget8 = document.querySelector('.shopCardGadget8');
cardGadget8.addEventListener( 'click', function() {
cardGadget8.classList.toggle('is-flipped');
});

var cardGadget9 = document.querySelector('.shopCardGadget9');
cardGadget9.addEventListener( 'click', function() {
cardGadget9.classList.toggle('is-flipped');
});

var cardGadget10 = document.querySelector('.shopCardGadget10');
cardGadget10.addEventListener( 'click', function() {
cardGadget10.classList.toggle('is-flipped');
});

//Modal Section
//Novel Section
document.getElementById('button1').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button2').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button3').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button4').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button5').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button6').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button7').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button8').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button9').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button10').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
//Furniture Section
document.getElementById('button11').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button12').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button13').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button14').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button15').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button16').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button17').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button18').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button19').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button20').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
//Appliances Section
document.getElementById('button21').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button22').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button23').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button24').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button25').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button26').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button27').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button28').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button29').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button30').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
//Fruits and Vegetables Section
document.getElementById('button31').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button32').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button33').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button34').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});

document.getElementById('button35').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button36').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button37').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});

document.getElementById('button38').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button39').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button40').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
//Video Games Section
document.getElementById('button41').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button42').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button43').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button44').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button45').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button46').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button47').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button48').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button49').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button50').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
//Gadgets Section
document.getElementById('button51').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button52').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button53').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button54').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button55').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button56').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button57').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button58').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button59').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});
	
document.getElementById('button60').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});

//Close Button
document.querySelector('.close').addEventListener('click', 
	function() {
		document.querySelector('.bg-modal').style.display = 'none';
	});

