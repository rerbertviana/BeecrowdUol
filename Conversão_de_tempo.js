 
let n = 140153;

let horas =  Math.floor(n/3600);
let restoHoras = n % 3600;
let minutos = 0;
let segundos = 0;
    
if (restoHoras != 0 ) {
   minutos = Math.floor(restoHoras/60);
   segundos = restoHoras % 60;
}
    
console.log(horas + ':' + minutos + ':' + segundos)