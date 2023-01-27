// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputFirstNum = e.target.querySelector('#FistNumber');
  const inputSecondNum = e.target.querySelector('#SecondNumber');

  const num1 = Number(inputFirstNum.value);
  const num2 = Number(inputSecondNum.value);
  
  const num = calculaMaiorNum(num1, num2);
  const resultado = `O maior número é: ${num}`
  setResult(resultado);

});

function calculaMaiorNum (num1, num2) {
  let maiorNum = num1>=num2 ? num1 : num2;
  console.log(maiorNum);
  return maiorNum;
}

function setResult (num) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';

  const p = document.createElement('p');
  
  p.innerHTML = num;
  result.appendChild(p);
};