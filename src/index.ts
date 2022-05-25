//CINE

let cantidadButacas: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en la sala")
);

let butacas: string[] = new Array(cantidadButacas);
let i: number;
let butacasDesocupadas: number = 0;
for (i = 0; i < cantidadButacas; i++) {
  butacas[i] = prompt(
    "ingrese true si esta ocupda y false si no lo está. butaca[" + i + "]"
  );
  if (butacas[i] === "false") {
    butacasDesocupadas++;
  }
}
console.log(butacas);
console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas);
