document.getElementById("generateBtn").addEventListener("click", generate);
function generate() {
    let s = document.getElementById("tx").value;
    let n = check(s);

    if (n === 'good') {
        document.getElementById("tx").value = "password is Strong enough";
    } else {
        let s1 = generates(s);
        document.getElementById("tx").value = s1;
    }
}

var capital = 0;
var small = 0;
var number = 0;
var special = 0;

function check(s) {
    capital = 0;
    small = 0;
    number = 0;
    special = 0;

    if (s.length >= 8) {
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
                capital++;
            } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
                small++;
            } else if (!isNaN(s[i])) {
                number++;
            } else {
                special++;
            }
        }
    }

    if (capital >= 1 && small >= 3 && number >= 2 && special >= 2) {
        return "good";
    } else if (capital >= 1 && small >= 1 && number >= 1 && special >= 1) {
        return true;
    }

    return false;
}

function generates(s) {
    const replacements = {
        'B': '13', 'C': '(', 'D': '|)', 'E': '3', 'F': '|=', 'G': '6', 'H': '#',
        'I': '!', 'K': '|<', 'L': '1', 'M': '|\\/|', 'N': '|\\|', 'O': '0',
        'S': '&', 'U': '|_|', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'a': '@','q': '9', 'z': '2', 's':'$'
    };

    let s1 = s.replace(/[A-Za-z]/g, char => replacements[char] || char);
    let chk = check(s1);

    if (chk === "good") {
        return s1;
    } else {
        let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let alp2 = "abcdefghijklmnopqrstuvwxyz";
        let sp ="!@#$%^&*()<>{}"
        if(special < 2)
        {
            while ((2 - special) > 0) {
                s1 += sp[Math.floor(Math.random() *14)];
                special++;
            }
        }

        if (capital < 2) {
            while ((2 - capital) > 0) {
                s1 += alph[Math.floor(Math.random() * 26)];
                capital++;
            }
        }

        if (small < 3) {
            while ((3 - small) > 0) {
                s1 += alp2[Math.floor(Math.random() * 26)];
                small++;
            }
        }
        if(number<2)
        {
            while((2-number)>0)
            {
                s1+=Math.floor(Math.random() *10);
                number++;
            }
        }

        return s1;
    }
}

document.getElementById("generatenew").addEventListener("click", newgen);

function newgen(){
    var s1="";
    var c = 0;
    var s = 0;
    var n = 0;
    var sp = 0;
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alp2 = "abcdefghijklmnopqrstuvwxyz";
    let sym ="!@#$^&<>?{}()|";
    let num="1234567890";
    while (c < 2) {
        s1 += alph[Math.floor(Math.random() * alph.length)];
        c++;
    }

    while (n < 2) {
        s1 += Math.floor(Math.random() * 10);
        n++;
    }
    
    while (sp < 2) {
        s1 += sym[Math.floor(Math.random() * sym.length)];
        sp++;
    }

    while (s < 4) {
        s1 += alp2[Math.floor(Math.random() * alp2.length)];
        s++;
    }

    

   
    let allChars = alph + alp2 + sym + num;
    while (s1.length < 12) {
        s1 += allChars[Math.floor(Math.random() * allChars.length)];
    }

        document.getElementById("tx").value = s1;
    
}