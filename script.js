// Obtener referencias a los elementos del DOM
const greenRange = document.getElementById('greenRange');
const greenBox = document.getElementById('greenBox');
const greenHex = document.getElementById('greenHex');

const redRange = document.getElementById('redRange');
const redBox = document.getElementById('redBox');
const redHex = document.getElementById('redHex');

// Función para convertir número a Hexadecimal (asegura 2 dígitos)
function componentToHex(c) {
    var hex = parseInt(c).toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}

// Evento para la franja VERDE
greenRange.addEventListener('input', function() {
    // Obtenemos el valor del slider (0-255)
    let val = this.value;
    // Creamos el color hexadecimal: R=00, G=Valor, B=00
    let hexCode = "#00" + componentToHex(val) + "00";
    
    // Actualizamos el fondo y el texto
    greenBox.style.backgroundColor = hexCode;
    greenHex.textContent = hexCode;
});

// Evento para la franja ROJA
redRange.addEventListener('input', function() {
    // Obtenemos el valor del slider (0-255)
    let val = this.value;
    // Creamos el color hexadecimal: R=Valor, G=00, B=00
    let hexCode = "#" + componentToHex(val) + "0000";
    
    // Actualizamos el fondo y el texto
    redBox.style.backgroundColor = hexCode;
    redHex.textContent = hexCode;
});

// Inicializar los colores correctamente al cargar
// (Simulando los valores por defecto del input)
greenRange.dispatchEvent(new Event('input'));
redRange.dispatchEvent(new Event('input'));