function gerarTemperaturaAleatoria(){

    let sinal = Math.random();
    let temperatura;
    if(sinal >0.5)
    temperatura = Math.floor(Math.random()*5);
else temperatura = Math.floor(Math.random()*(-5));
    
//FIRA CODE

if (temperatura <-5)
console.log("Atemperatura está normal! - " + temperatura);
else if (temperatura >-5 && temperatura <0)
console.log("Cuidado! A temperatura está subindo! - " + temperatura)
else 
console.log("A temperatura é critica -" + temperatura);



}

//Criar a ideia de um sensor que lá a temperatura peridodicamente

setInterval(gerarTemperaturaAleatoria,1000);

