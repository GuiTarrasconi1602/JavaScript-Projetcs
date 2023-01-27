// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso ){
    setResult('Peso inválido. Por favor, digite o peso em quilos', false);
    return;
  }

  if(!altura ){
    setResult('Altura inválida. Por favor, digite a altura em metros', false);
    return;
  }

  const imc = getImc(peso, altura);
  const imcClass = IMCClass(imc);

  const resultado = `O seu IMC é: ${imc} - (${imcClass}) `
  setResult(resultado, true, imc);
  
});

function IMCClass (imc) {
  const classe = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) 
    return classe[5];
  if (imc >= 34.9) 
    return classe[4];
  if (imc >= 29.9) 
    return classe[3];
  if (imc >= 24.9) 
    return classe[2];
  if (imc >= 18.5) 
    return classe[1];
  if (imc < 18.5) 
    return classe[0];
}

function getImc(peso, altura){
  const imcValue = peso / altura ** 2;
  return imcValue.toFixed(2);
}

function createP (){
  const p = document.createElement('p');
  return p;
};

function setResult (msg, isValidAnwser, imc) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';

  const p = createP();
  

  if(isValidAnwser) {
    if (imc < 18.5) p.classList.add('risco-medio');
    else if (imc >= 18.5 && imc < 24.9) p.classList.add('saudavel');
    else if (imc >= 24.9 && imc < 29.9) p.classList.add('risco-baixo');
    else if (imc >= 29.9 && imc < 34.9) p.classList.add('risco-medio');
    else if (imc >= 34.9 && imc < 39.9) p.classList.add('risco-medio');
    else p.classList.add('risco-alto');
}
  else 
    p.classList.add('wrong-Answer')

  p.innerHTML = msg;
  result.appendChild(p);
};