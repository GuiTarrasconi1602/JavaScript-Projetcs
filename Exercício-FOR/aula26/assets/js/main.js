const elementos = [
  {tag: 'p', texto: 'Tag P'},
  {tag: 'div', texto: 'Tag DIV'},
  {tag: 'section', texto: 'Tag SECTION'},
  {tag: 'footer', texto: 'Tag FOOTER'}
];

const container = document.querySelector('.container');

for(let i = 0; i < elementos.length; i++) {
  let { tag , texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  container.appendChild(tagCriada);
}