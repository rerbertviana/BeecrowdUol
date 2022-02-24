        
var n = ['a+(b*c)-2-a', '(a+b*(2-c)-2+a)*2', '(a*b-(2+c)', '2*(3-a))', ')3+b*(2-c)(']

let resultado = [];
let string;
let resp;
let conferirParentese;
let nParentese;

for(let i=0; i< n.length; i++) {

    //CONFERIR PARENTESE
    let index = n[i].indexOf(")");

    if (index !== -1) {
        let index2 = n[i].indexOf("(");

        if (index2 !== -1) {
            if (index > index2) {
                conferirParentese = true;
            }
            else {
                conferirParentese = false;
            }
        } else {
            conferirParentese = false;
        }
    }

    //CONFERIR N° DE PARENTESES
    let cont = 0;
    let cont2 = 0;

    for( let j=0; j<n[i].length; j++) {

        if (n[i][j] == '(') {
            cont = cont + 1;
        }
        if (n[i][j] == ')') {
            cont2 = cont2 + 1;
        }
    
        if (cont == cont2) {
            nParentese = true;
        }
        else {
            nParentese = false;
        }
    }
   
    if (conferirParentese && nParentese) {
        resp = "correct";
    }
    else {
        resp = "incorrect";
    }

    console.log(resp);
}
