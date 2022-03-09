let n = ['2', '3'];

matriz = [];
let cont=0;
let l=1;
let m=2;
let cont2=0;

for(let i=0; i<n[0]; i++) {
    for(let j=0; j<n[0]; j++) {
        if(i==0) {
            matriz.push(j+1);
            
        }
        else {
            if(cont==0) {
                matriz.push(matriz[i])
                cont++;
            }
            else {
                if((matriz[matriz.length-1] -1) != 0 && cont2==0) {
                    matriz.push((matriz[matriz.length-1]) -1);
                }
                else {
                    matriz.push(m);
                    m++;
                    cont2++;
                }
            }
        }
    }
    cont = 0;
    m=2;
    cont2=0;
}

let c=[];
let d=0;
let h;

for(let i=0; i<2; i++) {
    for(let j=d; j<d+2; j++) {
        if(c[i]) {
            c[i] = c[i] + " " + matriz[j];
        }
        else {
            c[i] = matriz[j];
        }
    }
    d=d+2;
    console.log(c[i])
}


