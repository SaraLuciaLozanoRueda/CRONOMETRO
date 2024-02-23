const tiempo = document.getElementById('numeros');
const rodar = document.getElementById('comenzar');
const again = document.getElementById('reiniciar');

let contador;
let horas = 0;
let minutos = 0;
let segundos = 0;

function reloj() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    tiempo.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
}

rodar.addEventListener('click', () => {
    contador = setInterval(reloj, 100);
})

again.addEventListener('click', () => {
    clearInterval(contador);
    horas = 0;
    minutos = 0;
    segundos = 0;
    tiempo.textContent = '00:00:00';
})
