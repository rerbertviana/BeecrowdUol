
let n = 5;

if (n>0 && n<46) {
    
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    let resul = fibonacci.toString();

    for (let i=0; i< n ; i++) {
        resul = resul.replace(",",' ');
    }
  console.log(resul);

}