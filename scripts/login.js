document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el comportamiento predeterminado del formulario

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Mostrar los datos del formulario
  document.getElementById('formData').innerText = `Intentando iniciar sesión con: ${email} / ${password}`;

  fetch('https://127.0.0.1:7097/api/Auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
  })
  .then(data => {
      // Mostrar la respuesta del fetch
      document.getElementById('fetchResponse').innerText = `Respuesta del servidor: ${JSON.stringify(data)}`;
      localStorage.setItem('jwtToken', data.token); // Almacena el token JWT en localStorage
      window.location.href = '/src/admin.html'; // Redirige a la página de admin
  })
  .catch(error => {
      // Mostrar el error
      document.getElementById('fetchError').innerText = `Error durante el fetch: ${error.message}`;
      console.error('Login Error:', error);
  });
});
