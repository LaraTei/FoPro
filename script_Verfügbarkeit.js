// Funktion, um eine zufällige Zahl zwischen 1 und 5 zu generieren
function getRandomStock() {
  return Math.floor(Math.random() * 5) + 1; // Zahl zwischen 1 und 5
}

// Funktion, um die Verfügbarkeit basierend auf der ausgewählten Größe anzuzeigen
function showAvailability() {
  const sizeSelect = document.getElementById("size-select");
  const selectedSize = sizeSelect.value; // Ausgewählte Größe
  const availabilityMsg = document.getElementById("availability-msg");

  if (selectedSize) {
    const stock = getRandomStock(); // Verfügbarkeitszahl generieren
    availabilityMsg.textContent = `Nur noch ${stock} Stück in Größe ${selectedSize} verfügbar!`;
  } else {
    availabilityMsg.textContent = ""; // Nachricht zurücksetzen, wenn keine Größe gewählt ist
  }
}
