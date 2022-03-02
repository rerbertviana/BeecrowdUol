
let n = 3;
let a = []
let array1 = []

array1[0] = ['To' ,'C', 'compr', 'Wed', 'e5tgh'];
array1[1] = ['o' ,'op', 'rerb', 'd', 'pepe'];
array1[2] = ['o' ,'op', 'rerb', 'd', 'pepes'];

for(let i=0; i<n; i++){
    if(array1[i].length >1 && array1[i].length <=50) {
        for(let j=0; j<array1[i].length;j++) {
        if(array1[i][j].length >1 && array1[i][j].length <=50) {
                array1[i].sort(function(a,b){
                    if(a.length > b.length) return 1;
                    if(a.length < b.length) return -1;
                    return 0;
                });
            }
        }
        let resul = array1[i].toString()
        for(let i=0; i<resul.length; i++) {
             resul = resul.replace(",",' ');
        }
        console.log(resul);
    }
}