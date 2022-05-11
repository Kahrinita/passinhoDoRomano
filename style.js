function cifrar() {
   var texto = document.getElementById("texto").value;
   var numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherCifrar(texto, numDesloc);
}

function cypherCifrar(texto, numDesloc) {
    var textoArray = [];
    var deslocamentoArray = [];
    var textoCodificado = "";

    for (var i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (i = 0; i < textoArray.length; i++) {
        if (textoArray[i] >= 65 && textoArray[i] <= 90) {
            deslocamentoArray.push((((textoArray[i] - 65 + numDesloc) % 26) + 65));
        } else if (textoArray[i] >= 97 && textoArray[i] <= 122) {
            deslocamentoArray.push((((textoArray[i] - 97 + numDesloc) % 26) + 97));
        } else {
            deslocamentoArray.push(textoArray[i]);
        }
    }

    for (i = 0; i < deslocamentoArray.length; i++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[i]);
    }
    return textoCodificado;
}

function decifrar() {
    var texto = document.getElementById("texto").value;
    var numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherDec(texto, numDesloc);
}

function cypherDec(texto, numDesloc) {
    var textoArray = [];
    var deslocamentoArray = [];
    var textoCodificado = "";

    for (var i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (i = 0; i < textoArray.length; i++) {
        if (textoArray[i] >= 65 && textoArray[i] <= 90) {
            deslocamentoArray.push((((textoArray[i] - 90 - numDesloc) % 26) + 90));
        } else if (textoArray[i] >= 97 && textoArray[i] <= 122) {
            deslocamentoArray.push((((textoArray[i] - 122 - numDesloc) % 26) + 122));
        } else {
            deslocamentoArray.push(textoArray[i]);
        }
    }

    for (i = 0; i < deslocamentoArray.length; i++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[i]);
    }
    return textoCodificado;
}
