// Datos iniciales con banderas y nombres al 09/12
const monedas = [
    { codigo: "ARS", tasa: 1012.85, pais: "ar", nombre: "Peso Argentino" },
    { codigo: "USD", tasa: 1, pais: "us", nombre: "Dólar Estadounidense" },
    { codigo: "EUR", tasa: 0.94623, pais: "eu", nombre: "Euro" },
    { codigo: "CLP", tasa: 974.69, pais: "cl", nombre: "Peso Chileno" },
    { codigo: "UYU", tasa: 42.6214, pais: "uy", nombre: "Peso Uruguayo" },
];

// Verificar y actualizar `localStorage`
const monedasGuardadas = JSON.parse(localStorage.getItem("monedas"));
if (!monedasGuardadas || monedasGuardadas.length !== monedas.length) {
    localStorage.setItem("monedas", JSON.stringify(monedas));
}
const tasasCambio = JSON.parse(localStorage.getItem("monedas"));

// Elementos del DOM
const formulario = document.getElementById("formulario-conversion");
const entradaCantidad = document.getElementById("cantidad");
const monedaOrigen = document.getElementById("moneda-origen");
const monedaDestino = document.getElementById("moneda-destino");
const banderaOrigen = document.getElementById("bandera-origen");
const banderaDestino = document.getElementById("bandera-destino");
const resultadoDiv = document.getElementById("resultado");
const botonLimpiar = document.getElementById("boton-limpiar");

// Rellenar los selectores de monedas
const llenarOpcionesMoneda = (selector) => {
    selector.innerHTML = monedas
        .map(({ codigo, nombre }) => `<option value="${codigo}">${nombre} (${codigo})</option>`)
        .join("");
};
llenarOpcionesMoneda(monedaOrigen);
llenarOpcionesMoneda(monedaDestino);

// Actualizar las banderas al cambiar la selección
const actualizarBandera = (elementoBandera, codigoMoneda) => {
    const moneda = monedas.find(({ codigo }) => codigo === codigoMoneda);
    if (moneda) {
        elementoBandera.src = `https://flagcdn.com/w40/${moneda.pais}.png`;
    }
};

// Manejo de cambio en los selectores
monedaOrigen.addEventListener("change", (e) => actualizarBandera(banderaOrigen, e.target.value));
monedaDestino.addEventListener("change", (e) => actualizarBandera(banderaDestino, e.target.value));

// Inicializar con banderas predeterminadas
actualizarBandera(banderaOrigen, monedaOrigen.value);
actualizarBandera(banderaDestino, monedaDestino.value);

// Función para convertir monedas
const convertirMoneda = (cantidad, origen, destino) => {
    const tasaOrigen = monedas.find(({ codigo }) => codigo === origen)?.tasa || 1;
    const tasaDestino = monedas.find(({ codigo }) => codigo === destino)?.tasa || 1;
    return cantidad * (tasaDestino / tasaOrigen);
};

// Manejo del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación
    const cantidad = parseFloat(entradaCantidad.value);
    const origen = monedaOrigen.value;
    const destino = monedaDestino.value;

    if (!cantidad || cantidad <= 0 || !origen || !destino) {
        resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    if (origen === destino) {
        resultadoDiv.textContent = "Por favor, selecciona monedas diferentes.";
        return;
    }

    // Conversión
    const resultado = convertirMoneda(cantidad, origen, destino);
    resultadoDiv.textContent = `${cantidad} ${origen} equivale a ${resultado.toFixed(2)} ${destino}`;
});

// Botón de borrado
botonLimpiar.addEventListener("click", () => {
    entradaCantidad.value = "";
    resultadoDiv.textContent = "El resultado aparecerá aquí...";
    monedaOrigen.selectedIndex = 0;
    monedaDestino.selectedIndex = 0;
    actualizarBandera(banderaOrigen, monedaOrigen.value);
    actualizarBandera(banderaDestino, monedaDestino.value);
});
