let n = 1;
let x = 0;
let y='';
let s;
let l = 1;
let cont=0;
let string = ["Computers account for only 5% of the country's commercial electricity consumption."]

for(let i=0; i<n; i++) {
        if(string[i].length<200) {
                s = string[i].toLowerCase();
                for(let j=0; j<s.length; j++) {
                        for(let k=l; k<s.length; k++) {
                                if(s[j] == s[k]) {
                                    cont++;
                                }
                        }
                        if(cont>x) {
                                x=cont;
                                y=s[j];
                        } else if(cont == x) {
                                y=y+s[j];
                        }
                        cont=0;
                        l++;
                }
                console.log(y)
                l=1;
        }
}

