# JAVASCRIPT – TERCERA PREENTREGA

## Convertidor de Monedas JbR 

## **Solicitado por la cátedra:**
- **DOM**  
- **Eventos**  
- **JSON / LocalStorage**  
- **Programación Defensiva** *(NO BAJA PUNTOS)*  
- **If ternario** *(si lo pueden usar, mandenle solo para trabajar su memoria muscular — NO BAJA PUNTOS)*  
- **Desestructuración** *(SI O SI — NO BAJA PUNTOS EN LA 3ER ENTREGA)*  
- **Operador OR** *(no baja puntos, pero si se les ocurre para mejorar la UI/UX, MANDEN)*  
- **NO PROMPT, NO ALERT**, `console.log` solo para información del desarrollador.  

---

## Descripción del Proyecto

Este proyecto es una aplicación web que permite convertir entre diferentes monedas utilizando tasas de cambio predefinidas. El convertidor incluye características modernas como el manejo del DOM, almacenamiento en `localStorage`, validación de datos y una interfaz intuitiva.

## Funcionalidades 

- Conversión de monedas seleccionando desde y hacia monedas específicas.
- Visualización de banderas de los países asociados a cada moneda.
- Almacenamiento de tasas de cambio en `localStorage` para persistencia entre sesiones.
- Validación de datos ingresados por el usuario para evitar errores.
- Opción para limpiar los campos del formulario con un botón dedicado.

## Tecnologías Utilizadas 

- **HTML**: Para la estructura del contenido.
- **CSS**: Para la personalización del diseño.
- **JavaScript**: Para la lógica de la aplicación, manejo del DOM y eventos.
- **LocalStorage**: Para el almacenamiento de datos en el navegador.

## Premisas Cumplidas 

### **DOM**
- Se utilizan selectores CSS para obtener referencias a los elementos del DOM como el formulario, los campos de entrada, los selectores de monedas y las imágenes de las banderas.
- Se modifican elementos del DOM para mostrar resultados de conversión y actualizar las banderas según las monedas seleccionadas.

### **Eventos**
- Se utiliza el evento `submit` del formulario para activar la lógica de conversión de monedas.
- Se utiliza el evento `click` del botón "Borrar" para limpiar los campos del formulario y restablecer los selectores.

### **JSON/LocalStorage**
- Se utiliza `localStorage` para almacenar (`setItem`) y recuperar (`getItem`) la lista de monedas y sus tasas de cambio.
- Se emplean `JSON.stringify` y `JSON.parse` para convertir los datos a formato JSON y viceversa.

### **Programación Defensiva**
- Se realiza una validación básica de los datos ingresados por el usuario:
  - Cantidades negativas o valores no numéricos son rechazados.
  - Se evita la conversión entre la misma moneda.
  - Mensajes de error claros son mostrados cuando se detectan datos inválidos.

### **Operador OR**
- Se utiliza el operador OR (`||`) para proporcionar valores por defecto en caso de que no se encuentren tasas de cambio para las monedas seleccionadas.

### **Desestructuración**
- Se aplica desestructuración para extraer propiedades de objetos, como `codigo` y `tasa`, al trabajar con la lista de monedas.

### **If ternario**
- No se encontró oportunidad de implementar el operador ternario (`? :`) en este proyecto.

### **Otros Detalles**
- No se utiliza `prompt` ni `alert`.  
- Se emplea `console.log` únicamente para mensajes informativos destinados al desarrollador.


