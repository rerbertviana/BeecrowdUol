let t = 3;

let j = 0;

if(t>=2 && t <=50) {
    for(let i=0; i<1000; i++) {
        if(j<t) {
           console.log(`N[${i}] = ${j}`); 
           j++;
        }
        else {
            j = 0;
            console.log(`N[${i}] = ${j}`); 
            j++;
        }
    }
}
