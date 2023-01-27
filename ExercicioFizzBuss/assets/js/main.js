// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNum = e.target.querySelector('#num');
  const num = Number(inputNum.value);
  
  const resultado = returnMessage(num)
  setResult(resultado);
});

function returnMessage (num) {
  if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz'
  else if (num % 3 == 0)            return 'Fizz'
  else if (num % 5 == 0)            return 'Buzz'
  else                              return num
}


function setResult (img) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '' // Cleaning last result
  const p = document.createElement('p');
  
  p.innerHTML = img;
  result.appendChild(p);
};
