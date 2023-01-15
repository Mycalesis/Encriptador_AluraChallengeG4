

function encriptarTexto() {
  var texto = document.getElementById("mensaje").value;
  if (texto == " ") {
    alert("ingrese la palabra o frase que desea encriptar primero");
  } else { 
  var texto_encriptado = texto.replace(/e/igm, "enter").replace(/i/igm,"imes").replace(/a/igm,'ai').replace(/o/igm,"ober").replace(/u/igm,"ufat");
  textoCopiar.value = texto_encriptado;
  document.getElementById("mensaje").value = " "
  document.getElementById("imagen_busqueda").style.display = "none";
  document.getElementById("copiar").style.display = "inline";
  document.getElementById("textoCopiar").style.display = "inline";
  
}
}

function desencriptarTexto() {
  var texto = document.getElementById("mensaje").value;
  if (texto == " ") {
    alert("ingrese la palabra o frase que desea desencriptar primero");
  } else { 
    var texto_desencriptado = texto.replace(/enter/igm, "e").replace(/imes/igm,"i").replace(/ai/igm,'a').replace(/ober/igm,"o").replace(/ufat/igm,"u");
    console.log(texto_desencriptado);
    document.getElementById("imagen_busqueda").style.display = "none";
    document.getElementById("copiar").style.display = "inline";
    document.getElementById("textoCopiar").style.display = "inline";
    textoCopiar.value = texto_desencriptado;
    document.getElementById("mensaje").value = " "
  } 
}


function copiar () {
  let textoCopiado = textoCopiar.value;
  navigator.clipboard.writeText(textoCopiado);
  alert("El texto ha sido copiado de manera satisfactoria");
}
