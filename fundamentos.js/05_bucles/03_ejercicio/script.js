function numerosPares(){
    let array = []
    par = 2

    while(par <= 20){
        array.push(pares)
        par += 2
    }
    document.getElementById("lista").innerHTML = `<h2>Primeros 10 pares: <br>${array}</h2>`
}

//document muestra el resultado en el html//