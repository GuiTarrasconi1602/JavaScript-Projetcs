const h1 = document.querySelector('.container h1')
const h2 = document.querySelector('.container h2')
const data = new Date()


function getDiaDaSemanaTexto(diaSemana){
  let diaDaSemanaTexto; 
  switch(diaSemana){
    case 0:
      diaDaSemanaTexto = 'Domingo';
      return diaDaSemanaTexto;
    case 1:
      diaDaSemanaTexto = 'Segunda';
      return diaDaSemanaTexto;
    case 2:
      diaDaSemanaTexto = 'Terça';
      return diaDaSemanaTexto;
    case 3:
      diaDaSemanaTexto = 'Quarta';
      return diaDaSemanaTexto;
    case 4:
      diaDaSemanaTexto = 'Quinta';
      return diaDaSemanaTexto;
    case 5:
      diaDaSemanaTexto = 'Sexta';
      return diaDaSemanaTexto;
    case 6:
      diaDaSemanaTexto = 'Sábado';
      return diaDaSemanaTexto;  
  }
}
function getMesTexto (mes) {
  let mesTexto
  switch(mes) {
    case 0:
      mesTexto = 'Janeiro'
      return mesTexto;
    case 1:
      mesTexto = 'Fevereiro'
      return mesTexto;
    case 2:
      mesTexto = 'Março'
      return mesTexto;
    case 3:
      mesTexto = 'Abril'
      return mesTexto;
    case 4:
      mesTexto = 'Maio'
      return mesTexto;
    case 5:
      mesTexto = 'Junho'
      return mesTexto;
    case 6:
      mesTexto = 'Julho'
      return mesTexto;
    case 7:
      mesTexto = 'Agosto'
      return mesTexto;
    case 8:
      mesTexto = 'Setembro'
      return mesTexto;
    case 9:
      mesTexto = 'Outubro'
      return mesTexto;
    case 10:
      mesTexto = 'Novembro'
      return mesTexto;
    case 11:
      mesTexto = 'Dezembro'
      return mesTexto;
  }
}

function returnDataCompleta (data) {
  let dataCompleta = `Data: ${getDiaDaSemanaTexto(data.getDay())}, dia ${data.getDate()} de ${getMesTexto(data.getMonth())} de ${data.getFullYear()}`
  return dataCompleta;
}

function returnHoraCompleta (data){
  let dataCompleta = `Horário: ${data.getHours()}: ${data.getMinutes()}: ${data.getSeconds()}`
  return dataCompleta
}


h1.innerHTML = returnDataCompleta(data);
h2.innerHTML = returnHoraCompleta(data);

// Outras formar de fazer a mesma coisa de forma mais eficiente:

// function getDiaDaSemanaTexto(diaSemana){
//   let diasDaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return diasDaSemanaTexto[diaSemana];
// }

// const data1 = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-Br', {dateStyle: 'full', timeStyle: 'short'});