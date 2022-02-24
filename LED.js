
let n = 3;
let resul = 0;
let arrayNumber = ['115380', '2819311', '23456']

if(n >=1 && n <=1000){

    for(let i=0; i<arrayNumber.length ; i++) {

        if(arrayNumber[i].length >=1 && arrayNumber[i].length < Math.pow(10, 100) ) {

            resul = 0;

            for(let j=0; j<arrayNumber[i].length; j++) {
                if(arrayNumber[i][j] == '1') {
                    resul = resul + 2;
                }
                if(arrayNumber[i][j] == '2' || arrayNumber[i][j] == '3' || arrayNumber[i][j] == '5') {
                     resul = resul + 5;
                }
                if(arrayNumber[i][j] == '4') {
                    resul = resul + 4;
                }
                if(arrayNumber[i][j] == '6' || arrayNumber[i][j] == '0' || arrayNumber[i][j] == '9') {
                     resul = resul + 6;
                }
                if(arrayNumber[i][j] == '7') {
                    resul = resul + 3;
                }
                if(arrayNumber[i][j] == '8') {
                    resul = resul + 7;
                }
            } 
            console.log(resul + " leds");
        }
    }
}