let n=6;
let ri = ['0 0 0 0 0 1'];
let numeros;
let cont1=0;
let cont2=0;

if(n>0 && n<10000) {
    numeros = ri[0].split(' ');
    for(let i=0; i<n; i++) {
        if(numeros[i] == '0') {
            cont1++;
        }
        else {
            cont2++;
        }
    }
    console.log("Mary won " + cont1 + " times and John won " + cont2 + " times");
}

