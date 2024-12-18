let overlayClicked = false;  // Um sicherzustellen, dass nur einmal geklickt wird

// Funktion, die ausgelöst wird, wenn ein Geschenk geklickt wird
function showMessage() {
  if (!overlayClicked) {
    overlayClicked = true;
    // Zeige das Popup mit der Nachricht
    document.getElementById("popup").style.display = "block";
		
// Starte den Konfetti-Effekt
    launchConfetti();
  }
}

// Funktion, um den Konfetti-Effekt zu starten
function launchConfetti() {
  const confettiCanvas = document.getElementById("confetti-canvas");
  const confettiInstance = confetti.create(confettiCanvas, { resize: true });

  // Konfetti-Effekt mit spezifischen Einstellungen
  confettiInstance({
    particleCount: 100, // Anzahl der Partikel
    spread: 70, // Breite des Effekts
    origin: { y: 0.6 }, // Startpunkt etwas tiefer
    colors: ["#ff0", "#f00", "#0f0", "#00f", "#ffa500"], // Farben
  });
}

// Funktion, die das Popup schließt und das Overlay entfernt
function redeemCoupon() {
  document.getElementById("popup").style.display = "none";  // Schließt das Pop-up
  document.getElementById("overlay").style.display = "none";  // Entfernt das Overlay
  document.body.style.overflow = "auto";  // Scrollen der Seite wieder ermöglichen

  // Zeige das Rabatt-Schild
  document.getElementById("discount-banner").style.display = "block";
	
	//Zeige den neuen Preis
	document.getElementById("discounted-price").style.display = "inline";
}
