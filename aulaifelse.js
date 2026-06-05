const button = document.getElementById('oie-sim')
const campoTexto = document.getElementById('palavra-dia')
const areaMensagem = document.getElementById('mensagem-resultado')



button.addEventListener("click", doSomething)

function doSomething() {
  const valorDigitado =campoTexto.value; areaMensagem.textContent = valorDigitado;

  const valorsalvo = localStorage.getItem('textousuario');

  if (valorsalvo) { areaMensagem.textContent =  valorsalvo;
                  }
  }
button.addEventListener("click", doSomething);

function doSomething() 
  const valorDigitado = campoTexto.value;

  if (valorDigitado.trim() !== "") {
    areaMensagem.textContent = valorDigitado;          
    localStorage.setItem('textousuario', valorDigitado); 
    campoTexto.value = "";                              
  }
