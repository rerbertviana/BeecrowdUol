let n=['2', '3'];

let matrix = [];
let resul = [];
let l = 1;
let cont = 0;
let resp1 = [];
let resp2 = [];

for(let i=0; i<n.length; i++) {
    for(let j=0; j<n[i]; j++) {
        if(j!=0) {
            matrix.push(j+1);
            resul[j] = matrix;
        }
        for(let k=0; k<n[i]; k++) {
            if(j==0) {
                matrix.push(k+1);
                resul[j] = matrix;
            }
            else {
                resul[j].map(r => {
                    if(r==1){
                        cont++;
                    }
                });
                
                if(resul[j][k]-1>0 ) {
                    if(cont==0) {
                        matrix.push(resul[j][k]-1);
                        resul[j] = matrix;
                    }
                }
                else {
                    if(resul[j][k] != 1) {
                        matrix.push(l+1);
                        resul[j] = matrix;
                        l++;
                    }
                }
            }
        }
        matrix = [];
        cont = 0;
        l=1;
    }
    console.log(resul);
}



