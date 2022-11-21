const buttonOn = document.querySelector("#buttonOn");
const buttonOff = document.getElementById("buttonOff");
const img = document.querySelector('img');
const body = document.querySelector('body');

function apagado() {
  if(!seALampadaQuebrar()){
   img.src = './img/desligada.jpg';
   img.alt = "Lampada Apagado";
   body.style.backgroundColor = "black";
};
}
function aceso() {
  if(!seALampadaQuebrar()){
   img.src = './img/ligada.jpg';
   img.alt = "Lampada Acesa!";
   body.style.backgroundColor = '';
};
}
function quebrado (){
  img.src = './img/quebrada.jpg';
  img.alt = "Lampada Quebrou!! ;-; ";
  alert ("Vai comprar outra Lampada kkk");
};

function seALampadaQuebrar(){
  return img.src.indexOf('quebrada')>-1
}

buttonOn.addEventListener('click',aceso);
buttonOff.addEventListener('click',apagado);
img.addEventListener('dblclick',quebrado);
