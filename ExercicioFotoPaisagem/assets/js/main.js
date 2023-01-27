// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputLargura = e.target.querySelector('#LarguraImagem');
  const inputAltura = e.target.querySelector('#AlturaImagem');

  const largura = Number(inputLargura.value);
  const altura = Number(inputAltura.value);
  
  const modoImagem = calculaModoImagem(largura, altura);
  setResult(modoImagem);
});

function calculaModoImagem (largura, altura) {
  let modoImagem = largura>=altura ? 'A imagem está em modo paisagem' : 'A imagem está em modo retrato'
  return modoImagem
}

function setResult (img) {
  const result = document.querySelector('#resultado');
  const p = document.createElement('p');
  
  p.innerHTML = img;
  result.appendChild(p);
};