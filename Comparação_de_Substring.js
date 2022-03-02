let n = ['abcdef', 'cdofhij', 'TWO', 'FOUR', 'abracadabra', 'open', 'Hey This java is hot', 'Java is a new paradigm']

let cont =0;
let l = 1;
let x = 0;

for(let i=0; i<n.length-1; i++) {
    x=0;
    for(let j=0; j<n[i].length; j++) {
        for(let k=0; k<n[i+1].length; k++) {
            if(n[i][j] == n[i+1][k]) {
                cont++;
                while(n[i][j+l] == n[i+1][k+l]) {
                    cont++;
                    l++;
                    if(cont > x) {
                        x = cont;
                    }
                }
                if(cont > x) {
                    x = cont;
                }
            }
            cont=0;
            l=1;
        }
    }
    i++;
    console.log(x);
}