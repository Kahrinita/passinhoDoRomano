function cifrar() {
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherCifrar(texto, numDesloc);
}

function cypherCifrar(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
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
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherDec(texto, numDesloc);
}

function cypherDec(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
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

function cifrarteste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Correto");
        return true;
    } else {
        console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
        return false;
    }
}

console.log("Testando a função cifrar:")
cifrarteste(cypherCifrar("abc", 1), "bcd")
cifrarteste(cypherCifrar("xyz", 2), "zab")
cifrarteste(cypherCifrar("apto 67", 2), "apto 2")
cifrarteste(cypherCifrar("AEIOU", 5), "ABCDE")


function decifrarteste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Correto");
        return true;
    } else {
        console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
        return false;
    }
}

console.log("Testando a função decifrar:")
decifrarteste(cypherDec("bcd", 1), "abc")
decifrarteste(cypherDec("#erp gld!#", 3), "#bom dia!#")
decifrarteste(cypherDec("CBOBOB", 1), "BANANA")
