<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenido</title>
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background:linear-gradient(135deg,#ff9a9e,#fad0c4); height:100vh; display:flex; justify-content:center; align-items:center; animation:fadeIn 1.5s ease-in-out;">

  <div style="background:white; padding:40px; border-radius:20px; box-shadow:0 4px 25px rgba(0,0,0,0.15); text-align:center; max-width:450px; animation:slideUp 1s ease-in-out;">
    <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=80" alt="Bienvenida" style="width:100%; border-radius:15px; margin-bottom:20px;">
    <h1 style="margin:0 0 10px; font-size:2rem; color:#333;">¡Bienvenido!</h1>
    <p style="color:#555; font-size:1.1rem;">Gracias por visitar esta página animada. Disfruta el diseño y la experiencia visual.</p>
  </div>

  <style>
    @keyframes fadeIn {
      from { opacity:0; }
      to { opacity:1; }
    }
    @keyframes slideUp {
      from { transform:translateY(40px); opacity:0; }
      to { transform:translateY(0); opacity:1; }
    }
  </style>

</body>
</html>
