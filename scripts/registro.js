document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  fetch('TU_ENDPOINT_DE_REGISTRO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Registro fallido');
  })
  .then(data => {
    console.log('Registro exitoso:', data);
    // Aquí puedes redireccionar al usuario a la página de login o a otra parte
    window.location.href = '/ruta-a-login'; // Reemplaza '/ruta-a-login' con la URL de tu página de login
  })
  .catch((error) => {
    console.error('Error:', error);
    // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
  });
});