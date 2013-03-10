function CardGame(picture){
	this.picture = picture;
	this.visible = false;

	this.equals =  function (cardGame){
		if (this.picture.valueOf() == cardGame.picture.valueOf()){
			return true;
		}
		return false;
	}
}

function BuilderCardGame(){
	var pictures = {'black.png','black.png',
					'blue.png','blue.png',
					'blue_2.png','blue_2.png',
					'green.png','green.png',
					'pink.png','pink.png',
					'purple.png','purple.png',
					'red.png','red.png',
					'white.png','white.png',
					'wine.png','wine.png',
					'yellow.png','yellow.png'};
	this.doCardGame =  function (){
		shufflePictures();
		cards  = buildCardGame();
		return cards;
	}

	var shufflePictures = function(){
       var i = pictures.length, j, tempi, tempj;
		  if ( i == 0 ) return false;
		  while ( --i ) {
		     j = Math.floor( Math.random() * ( i + 1 ) );
		     tempi = pictures[i];
		     tempj = pictures[j];
		     pictures[i] = tempj;
		     pictures[j] = tempi;
		   }
	}
	
	var buildCardGame =  function (){
		int countCards = 0;
		cards =  new Array();
		for (var i = pictures.length - 1; i >= 0; i--) {
			CardGame c =  new CardGame(pictures[i]);
			cards[countCards] = pictures[i];
		};
		return cards;
	}
}