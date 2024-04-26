window.onload = function(){
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const somar = document.querySelector("#somar");
    const subtrair = document.querySelector("#subtrair");
    const multiplicar = document.querySelector("#multiplicar");
    const dividir = document.querySelector("#dividir");

    somar.addEventListener("click", function() {
        let resultado = parseInt(valor1.value) + parseInt(valor2.value);
        document.querySelector("#resultado").value = resultado;
    });

    subtrair.addEventListener("click", function() {
        let resultado = parseInt(valor1.value) - parseInt(valor2.value);
        document.querySelector("#resultado").value = resultado;
    });

    multiplicar.addEventListener("click", function() {
        let resultado = parseInt(valor1.value) * parseInt(valor2.value);
        document.querySelector("#resultado").value = resultado;
    });

    dividir.addEventListener("click", function() {
        // Check if divisor is not zero
        if (parseInt(valor2.value) !== 0) {
            let resultado = parseInt(valor1.value) / parseInt(valor2.value);
            document.querySelector("#resultado").value = resultado;
        } else {
            alert("Não é possível dividir por zero!");
        }
    });
}