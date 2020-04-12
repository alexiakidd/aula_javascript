//BUTTON
function clicou(){
    //alert("obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://github.com/alexiakidd/"); // abre em outra aba
    //window.location.href = "https://github.com/alexiakidd/" //abre na propria pag
}

function trocar(elemento){
    elemento.innerHTML = "passou";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//FUNCTION
/*function soma(n1,n2){
    return n1 + n2;
}
console.log(soma(1,9));*/


/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));*/


/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Digite a idade pra saber se é maior de idade");
console.log(validaIdade(idade));
*/




//DATE
/*var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getUTCDate());*/


//FOR
/*var count;
for(count=0; count<=5;count++){
    console.log(count);
}*/



//WHILE
/*var count = 10;
while(count <= 5){
    console.log(count);
    count ++;
}*/



//IF
/*var idade = prompt("Qual a sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/




//LISTA DE DICIONARIO(JSON)
/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);*/
//alert(frutas[0].cor);


//console.log("-----");

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//ARRAY
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop(); //remove o ultimo elemento do array
//console.log(lista);
//console.log(lista.length);
///console.log(lista[0]);
//console.log(lista.reverse());
//console.log(lista.toString()[0]); //-- Imprime primeiro elemento do array
//console.log(lista);
//console.log(lista.join(" - "));



//STRINGS E NUMEROS
/*var nome = "Alessandra Lima";
var idade = 23;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome " tem " + idade + "anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/
