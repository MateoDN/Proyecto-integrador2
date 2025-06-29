document.getElementById('medForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const horario = document.getElementById('horario').value;

  const res = await fetch('/api/medicamentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, horario })
  });

  const data = await res.json();
  console.log('Guardado:', data);
  obtenerMedicamentos();
});

async function obtenerMedicamentos() {
  const res = await fetch('/api/medicamentos');
  const medicamentos = await res.json();
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  medicamentos.forEach(med => {
    const li = document.createElement('li');
    li.textContent = `${med.nombre} a las ${med.horario}`;
    lista.appendChild(li);
  });
}

obtenerMedicamentos();
