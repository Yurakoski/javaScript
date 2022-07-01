alert("Deberá ingresar 3 números. Se mostrará la sumatoria de los números impares.")
const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));
const numero3 = parseInt(prompt("Ingrese el tercer número"));

let arrayNumeros = [numero1 , numero2 , numero3];
let suma = 0;

for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i] %2){
        suma += arrayNumeros[i];
    }
}

alert("La suma de los números impares ingresados es: " + suma);