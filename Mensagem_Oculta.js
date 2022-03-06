let n=4;
string = ['compete online  design event rating', '  u    r i  o    n l  i    n  e   ' , ' ', 'round  elimination during  onsite  contest'];
let teste;
let resul ='';
let k=0;

for(let i=0; i<n; i++) {
    if(string[i].length>0 && string[i].length<50 ) {
        teste = string[i].split(' ');
        for(let j=0; j<teste.length; j++) {
            if(teste[j] != '') {
               resul = resul + teste[j][0];
            }
        }
        console.log(resul);
        resul='';
    }
}



