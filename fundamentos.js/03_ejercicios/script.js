function modificarMensaje() {
    let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];

    let eliminados = [];
    let agregados = [];

    // Eliminar y agregar elementos utilizando solo los métodos pop, shift, unshift y push
    eliminados.push(mensajeInicial.shift()); // Elimina "Hola"
    eliminados.push(mensajeInicial.pop()); // Elimina "C"
    agregados.push(mensajeModificado[0]); // Agrega "Somos" al inicio
    agregados.push(mensajeModificado[mensajeModificado.length - 1]); // Agrega "del mundo" al final

    // Mostrar resultados en una alerta
    alert("Arreglo inicial: " + mensajeInicial.join(" ") + "\n" +
        "Arreglo final: " + mensajeModificado.join(" ") + "\n" +
        "Valores eliminados: " + eliminados.join(", ") + "\n" +
        "Valores agregados: " + agregados.join(", "));
}

function operandoMetodos() {
    let numerosAleatorios = [4,7,5,9,6,22,35,12,55,32];
    let arregloInicial = [4,7,5,9,6,22,35,12,55,32];
    let numerosFinales = [];

    let eliminados = [];
    let agregados = [];

    // Eliminar y agregar elementos utilizando solo los métodos pop, shift, unshift y push
    eliminados.push(numerosAleatorios.shift()); // Elimina el primer elemento
    eliminados.push(numerosAleatorios.pop()); // Elimina el último elemento
    agregados.push(numerosAleatorios[0]); // Agrega un nuevo número al inicio
    agregados.push(numerosAleatorios[numerosAleatorios.length - 1]); // Agrega un nuevo número al final
    eliminados.push(numerosAleatorios.shift()); // Elimina el primer elemento
    eliminados.push(numerosAleatorios.shift()); // Elimina el primer elemento

    // Suma de todos los elementos
    let sumaTotal = numerosFinales.reduce((total, num) => total + num, 0);

    // Mostrar resultados en una alerta
    alert("Arreglo inicial: " + arregloInicial.join(", ") + "\n" +
        "Arreglo final: " + numerosFinales.join(", ") + "\n" +
        "Valores eliminados: " + eliminados.join(", ") + "\n" +
        "Valores agregados: " + agregados.join(", ") + "\n" +
        "Suma total: " + sumaTotal);
}
