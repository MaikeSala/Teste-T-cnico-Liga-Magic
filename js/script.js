const aumentar = document.querySelector('.Info--qtmais');
const diminuir = document.querySelector('.Info--qtmenos');
const cont = document.querySelector('.Info--qt');

let aux = 1

aumentar.addEventListener('click', () => {
    aux++;
    cont.innerHTML = aux;
});

diminuir.addEventListener('click', () => {
    if(aux > 1) {
        aux--;
        cont.innerHTML = aux;
    }
});