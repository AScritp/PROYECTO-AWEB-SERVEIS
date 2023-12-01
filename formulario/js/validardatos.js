    // Validación del DNI del cliente
    function validarDNI(dni) {
        const dniRegex = /^\d{8}$/;
        return dniRegex.test(dni);
      }
  
      // Función para calcular el precio del envío
      function calcularPrecioEnvio(peso, origen, destino) {
        let precioBase;
  
        if (origen === destino) {
          precioBase = 5;
        } else if (origen === 'Palma' || destino === 'Palma') {
          precioBase = 9;
        } else {
          precioBase = 7;
        }
  
        if (peso < 10) {
          return precioBase;
        } else if (peso >= 10 && peso <= 20) {
          return precioBase * 1.5;
        } else {
          return precioBase * 2;
        }
      }
  

        // Manejo del formulario
    document.getElementById('formulario-pago').addEventListener('submit', function(event) {
        event.preventDefault();
  
        const dni = document.getElementById('dniCliente').value;
        const peso = parseFloat(document.getElementById('pesoPaquete').value);
        const origen = document.getElementById('ciudadOrigen').value;
        const destino = document.getElementById('ciudadDestino').value;
  
        if (validarDNI(dni)) {
          const precioEnvio = calcularPrecioEnvio(peso, origen, destino);
          alert(`El precio del envío es: ${precioEnvio}€`);
        } else {
          alert('El formato del DNI es incorrecto. Por favor, ingrese un DNI válido.');
        }
      });