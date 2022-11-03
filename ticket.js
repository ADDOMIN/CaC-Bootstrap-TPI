const precio = 200;

function calcular() {

    var cant = document.getElementById("cantidad").value;
    var catego = document.getElementById("categoria").value;


    if (isNaN(cant)) {
        alert("Sólo puede ingresar números");
    }
    else if (catego == "estudiante") {
        let cuenta = cant * precio * 0.2;
        document.getElementById("pago").value = "Total a Pagar: $ " + cuenta;
    } else if (catego == "trainee") {
        let cuenta = cant * precio * 0.5;
        document.getElementById("pago").value = "Total a Pagar: $ " + cuenta;
    } else if (catego == "junior") {
        let cuenta = cant * precio * 0.85;
        document.getElementById("pago").value = "Total a Pagar: $ " + cuenta;
    }

}



