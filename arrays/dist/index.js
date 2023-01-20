"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
    <div>
      <h2 style="color: ${color};">${curso.nivel}</h2>
      <p>${curso.horas}</p>
      <p>${curso.aulas}</p>
      <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join('-')}</p>
    </div>
  `;
    });
}
