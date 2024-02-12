document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('createPostForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío predeterminado del formulario
  
      const formData = new FormData(form);
      const postData = {};
  
      // Recorre formData y llena postData con los valores del formulario
      formData.forEach((value, key) => {
        // Para campos que se espera que sean listas, como categorías, etiquetas, URLs, etc.
        if (['categories', 'tags', 'imageUrls', 'videoUrls', 'fileUrls'].includes(key)) {
          postData[key] = value.split(',').map(item => item.trim()); // Divide los valores separados por comas y los trimma
        } else {
          postData[key] = value.trim();
        }
      });
  
      // Opción: Convertir postData a JSON
      const jsonData = JSON.stringify(postData);
  
      // Enviar los datos al servidor
      fetch('TU_ENDPOINT_DEL_BACKEND', { // Reemplaza 'TU_ENDPOINT_DEL_BACKEND' con la URL real de tu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Si necesitas enviar un token de autenticación o headers adicionales, agrégalos aquí
        },
        body: jsonData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Maneja el éxito de la operación, por ejemplo, mostrando un mensaje al usuario o redirigiendo
      })
      .catch((error) => {
        console.error('Error:', error);
        // Maneja los errores, por ejemplo, mostrando un mensaje de error al usuario
      });
    });
  });
  