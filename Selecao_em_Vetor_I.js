let a = []

a[0] = 0;
a[1] = -5;
a[2] = 63;
a[3] = -8.5;

for(let i=0; i<a.length; i++) {
    if(a[i] <=10) {
       console.log(`A[${i}] = ${a[i].toFixed(1)}`)
    }
}
