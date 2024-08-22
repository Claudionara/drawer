const form = document.querySelector(".resultado");
const sombra = document.querySelector(".mascara");

function enviarResultado() {
    // Lógica para mostrar o resultado na Div e a movimentação
     form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    form.style.zIndex = "2";
    sombra.style.zIndex = "1";
    sombra.style.visibility = "visible";
}

function generateNumber() {
    // Lógica para armazenar dados
   const one = Math.ceil (document.querySelector(".one").value);//referente ao primeiro valor,primeiro input
   const two = Math.floor (document.querySelector(".two").value);//referente ao segundo valor,segundo input
  const result = Math.floor(Math.random() * (two - one + 1) + one);
  document.getElementById("theEnd").innerHTML = result;//permitiu inserir o resultado dentre da div
 
}


function executarFuncoes() {
    //conjunto de funções que permitiu usar o onclick em duas situações diferente
    enviarResultado();
    generateNumber();
}

function retorno() {
    //retorno da div
    form.style.left = "-50%";
    form.style.transform = "translateX(0)";
    sombra.style.zIndex = "-1";
    sombra.style.visibility = "hidden";
}