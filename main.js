// VARIABLES QUE CAPTURAN EL HTML
const inputText = document.querySelector('#input-texto');
const inputMsg = document.querySelector('#msg');
const btnEncrypt = document.querySelector('#btn-encriptar');
const btnDecrypt = document.querySelector('#btn-desencriptar');
const btnCopy = document.querySelector('#btn-copiar');
const copiado = document.querySelector('#texto-copiado');

// EVENTOS DE LOS BOTONES
btnEncrypt.addEventListener('click', encode);
btnDecrypt.addEventListener('click', decode);
btnCopy.addEventListener('click', () => {
    copyText();
});

//CODIFICANDO EL MENSAJE
function encode(){
    function encodeText(input){
        let newInput='';
        let vocales = { 'a': 'ai' , 'e': 'enter','i': 'imes','o': 'ober','u': 'ufat'}
        newInput = input.replace(/[aeiou]/g, i => vocales[i]);
        return newInput;
    }
    inputMsg.value= encodeText(inputText.value);
}
// DECODIFICANDO EL MENSAJE
function decode(){
    function decodeText(input){
        let newInput='';
        let vocalesEncrypted = { 'ai': 'a' , 'enter':'e','imes': 'i','ober':'o' ,'ufat':'u' }
        newInput = input.replace(/ai|enter|imes|ober|ufat/g, i => vocalesEncrypted[i]);
        return newInput;
    }
    inputMsg.value= decodeText(inputText.value);
}
// COPIANDO EL MENSAJE CON UNA PEQUEÑA ANIMACION
function copyText () {
    inputMsg.select();
    inputMsg.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputMsg.value);
    copiado.textContent= 'Texto copiado con éxito !';
    setTimeout(() => {
        copiado.textContent = '';
        window.location.reload();
}, 1000);
    navigator.reset();

}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

