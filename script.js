const body = document.body;
const btnModo = document.getElementById('btn-modo');

btnModo.addEventListener('click', () => {
   
    body.classList.toggle('modo-oscuro');
   
    if (body.classList.contains('modo-oscuro')) {
        btnModo.textContent = '☀️ Modo Claro';
    } else {
        btnModo.textContent = '🌙 Modo Oscuro';
    }
});


const inicioTiempo = new Date().getTime();
const tiempoEsperaSegundos = 10; 


setTimeout(() => {
    const tiempoActual = new Date().getTime();
    const tiempoTotalMS = tiempoActual - inicioTiempo;
    
    
    const tiempoTotalSegundos = Math.floor(tiempoTotalMS / 1000);

    alert(`¡Hola! Has estado viendo el CV durante ${tiempoTotalSegundos} segundos.`);

}, tiempoEsperaSegundos * 1000); 