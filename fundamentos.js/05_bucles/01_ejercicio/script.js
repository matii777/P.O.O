function increment(){
let contador = 0;
let array = [];

while(contador <= 100){
    array.push(contador);
    contador += 5;

}
document.getElementById("lista").innerHTML = `<h2>Numeros del 0 al 100: <br>${array}</h2>`

}