let n=7;
let comandos = ['12', '15 ', '11', '13', '25', '14', '24'];
let teste = [];
let tamanho;
let resul;
let x=0;

if(n>0 && n<1000) {
    for(let i=0; i<n; i++) {
        if(comandos[i][0] == '1') {
            teste.push(comandos[i][1]);
        } else if(comandos[i][0] == '2') {
            console.log(i);
            tamanho = teste.length-1;
            if(comandos[i][1]<teste[tamanho]) {
                resul = 'queue';
            }
            else if(comandos[i][1] == teste[tamanho]) {
               
                resul = 'stack';
            } else {
                for(let j=0; j<teste.length; j++) {
                    if(teste[j]>x) {
                        x = teste[j]
                    }
                }
                if(comandos[i][1] == x) {
                    resul = 'priority queue'
                } 
            }
        }
    }
    console.log(resul);
}

