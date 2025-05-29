const form = document.getElementById('form-verify');
const inputA = document.getElementById('numberA');
const inputB = document.getElementById('numberB');
const mensagemErro = document.querySelector('.error-message');
const mensagemSucesso = document.querySelector('.success-message');

mensagemErro.style.display = 'none'
mensagemSucesso.style.display = 'none'

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseFloat(inputA.value);
    const valorB = parseFloat(inputB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        mensagemErro.textContent = 'Por favor, insira dois números válidos.';
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
        return;
    }

    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';

    if (valorA < valorB) {
        mensagemSucesso.textContent = `O primeiro número digitado: ${valorA} é menor que o segundo número digitado: ${valorB}.`;
        mensagemSucesso.style.display = 'block';
    } else if (valorA > valorB) {
        mensagemErro.textContent = `O primeiro número digitado: ${valorA} é maior que o segundo número digitado: ${valorB}.`;
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.textContent = `O primeiro número digitado: ${valorA} e o segundo número digitado: ${valorB} são iguais.`;
        mensagemErro.style.display = 'block';
    }

    inputA.value = '';
    inputB.value = '';
});