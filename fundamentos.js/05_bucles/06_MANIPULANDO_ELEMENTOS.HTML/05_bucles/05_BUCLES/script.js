function traerTablas(){
    let num = parseInt(document.getElementById("inputText").value);
    //alert (num); 
    for(let i = 1; i <= 10;i++){
        result = `${i} X ${num} = ${i*num}<br>`
    
    }
    document.getElementById("lista").innerHTML = result;
}