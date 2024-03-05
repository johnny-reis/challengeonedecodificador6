const textarea = document.querySelector(".entrada-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoCriptar = encriptar(textarea.value);
    mensagem.value = textoCriptar;
    textarea.value ="";

    document.querySelector(".boneco").style.display = "none";
    document.querySelector(".btn-Copiar").style.display = "inline-block";
    document.querySelector(".mensagem-Info").style.display = "none";
}

function btnDesencriptar(){
    const textoDesencriptar = desencriptar(textarea.value);
    mensagem.value = textoDesencriptar;
    textarea.value = "";

    document.querySelector(".boneco").style.display = "none";
    document.querySelector(".btn-Copiar").style.display = "inline-block";
    document.querySelector(".mensagem-Info").style.display = "none";
}

function encriptar(textoEncriptado){
    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    
            }
        
    }
    return textoDesencriptado
}

function copiar(){
    let copia = document.querySelector(".mensagem");
    copia.select();
    document.execCommand("copy");
    alert("texto copiado"); 
}