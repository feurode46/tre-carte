// JavaScript Document
		var conto = 3;
		var carte = new Array("img/acefront.png", "img/aceclubsfront.png", "img/queenfront.png");
		var uno;
		var due;
		var tre;
		var girate = false;
		var con = 0;
		var punteggio = 0;
		var vinto = false;
		var mischiabile = true;
		function countdown() {
			document.getElementById("rovescia").style.display = "block";
			if (mischiabile) {
				document.getElementById("rovescia").innerHTML = conto;
				conto--;
				if (conto === -1) {
					document.getElementById("rovescia").innerHTML = "Mischio...";
					mischiabile = false;
					mischia();
				} else {
					setTimeout("countdown()", 1000);
				}
			} else {
				location.reload();
			}
		}
		function mischia() {
			vinto = false;
			var i;
			var j;
			var k;
			// calcolo posizioni
			i = Math.round(Math.random() * 2);
			j = Math.round(Math.random() * 2);
			while (j === i) {
				j = Math.round(Math.random() * 2);
			}
			k = Math.round(Math.random() * 2);
			while (k === j || k === i) {
				k = Math.round(Math.random() * 2);
			}
			
			uno = carte[i];
			due = carte[j];
			tre = carte[k];
			visualizza(0);
			con++;
			if (con < 25) {
				setTimeout("mischia()", 200);
			} else if (con < 75) {
				setTimeout("mischia()", 50);
			} else if (con < 175) {
				setTimeout("mischia()", 7);
			} else {
				visualizza(4);
				document.getElementById("countdown").style.display = "none";
				con = 0;
			}
		}
		
		function visualizza(id) {
			switch (id) {
					case 0:
						document.uno.src = uno;
						document.due.src = due;
						document.tre.src = tre;
						break;
					case 1:
						document.uno.src = uno;
						break;
					case 2:
						document.due.src = due;
						break;
					case 3:
						document.tre.src = tre;
						break;
					case 4:
						document.uno.src = "img/jerrysback.png";
						document.due.src = "img/jerrysback.png";
						document.tre.src = "img/jerrysback.png";
						break;
				}
			// girate = false;
		}
		function appare() {
        	document.getElementById("gioca").style.display = "block";
        }
		function scompare() {
			document.getElementById("gioca").style.display = "none";
			ricomincia();
			mischia();
		}
		function ricomincia() {
			document.getElementById("countdown").style.display = "block";
		}
		function check(id) {
//			if (girate) {
				switch (id) {
					case 1:
						visualizza(1);
						if (uno === carte[0] || uno === carte[1]) {
							document.getElementById("risultato").innerHTML = "Hai perso!";
						} else {
							vinto = true;
							punteggio++;						
							document.getElementById("risultato").innerHTML = "Hai vinto!";
						}
						break;
					case 2:
						visualizza(2);
						if (due === carte[0] || due === carte[1]) {
							document.getElementById("risultato").innerHTML = "Hai perso!";
						} else {
							vinto = true;
							punteggio++;						
							document.getElementById("risultato").innerHTML = "Hai vinto!";
						}
						break;
					case 3:
						visualizza(3);
						if (tre === carte[0] || tre === carte[1]) {
							document.getElementById("risultato").innerHTML = "Hai perso!";
						} else {
							vinto = true;
							punteggio++;						
							document.getElementById("risultato").innerHTML = "Hai vinto!";
						}
						break;
				}
				document.getElementById("punteggio").innerHTML = "Punteggio: " + punteggio;
				setTimeout("appare()", 750);
				setTimeout("visualizza(0)", 750);
				if (vinto) {
					setTimeout("scompare()", 3000);
				} else {
					punteggio = 0;
					document.getElementById("inizia").value = "Gioca ancora";
				}
//			}
		}