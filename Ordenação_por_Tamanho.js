
let n = 4;
let a = []
let array1 = []

array1[0] = ['Top' ,'Coder', 'comp', 'Wedn', 'at', 'midnight'];
array1[1] = ['one' , 'three', 'five'];
array1[2] = ['I' , 'love', 'Cpp'];
array1[3] = ['sj', 'a', 'sa', 'df', 'r', 'e', 'w', 'f', 'd', 's', 'a', 'v', 'c', 'x', 'z', 'sd', 'fd']

for(let i=0; i<n; i++){
    if(array1[i].length >1 && array1[i].length <=50) {
        for(let j=0; j<array1[i].length;j++) {
            if(array1[i][j].length >1 && array1[i][j].length <=50) {
                array1[i].sort(function(a,b){
                    if(a.length > b.length) return -1;
                    if(a.length < b.length) return 1;
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
