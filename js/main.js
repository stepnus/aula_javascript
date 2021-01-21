
function soma(n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade) {
    
    var validar

    if(idade >= 18) {
        validar = true
    }
    else {
        validar = false
    }

    return validar
}

var idade = prompt("Qual sua idade")
console.log(validaIdade(idade))

//alert(setReplace("Vai Japão", "Japão", "Brasil"))
//alert(soma(5, 10))

/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count
for(count = 0; count <= 5; count++) {
    alert(count)
}
*/

/*
var count = 0
while (count <= 5) {
    console.log(count)
    alert(count)
    count++
}
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor)
/*

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/

/*
var lista = ["maçã", "pera", "laranja"]
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" "))
*/

/*
var nome = "Raphael";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(frase.replace("Japão", "Brasil"));
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão", "Brasil"));
*/