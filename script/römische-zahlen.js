let i = 0;

function convert() {
    let number = document.getElementById("in").value;
    let bool;
    bool = isNumber(number);
    if (bool) {
        document.getElementById("roem.zahlwarnung").innerHTML = "";
    if(i >= 4) {
    
        document.getElementById("roem.zahlwarnung").innerHTML = "Kann es sein das du dumm bist?";
        var container = document.getElementById("bild-container");
        container.innerHTML = "";
        var image = document.createElement("img");
        image.src = "picture/dumm.jpg";
        image.alt = "Dumm Bild";
        container.appendChild(image);
    }
    if (number < 3999) {
        
        if (i >= 4) {
        container.removeChild(image);
        }

    let einer = number % 10;
    
    const Einer = new Map();
        Einer.set(0, "");
        Einer.set(1, "I");
        Einer.set(2, "II");
        Einer.set(3, "III");
        Einer.set(4, "IV");
        Einer.set(5, "V");
        Einer.set(6, "VI");
        Einer.set(7, "VII");
        Einer.set(8, "VIII");
        Einer.set(9, "IX");
        let einerstelle = (Einer.get(einer));

        if (number >= 10) {
            let zehner = Math.floor(number / 10 % 10);
            const Zehner = new Map();
            Zehner.set(0, "");
            Zehner.set(1, "X");
            Zehner.set(2, "XX");
            Zehner.set(3, "XXX");
            Zehner.set(4, "XL");
            Zehner.set(5, "L");
            Zehner.set(6, "LX");
            Zehner.set(7, "LXX");
            Zehner.set(8, "LXXX");
            Zehner.set(9, "XC");
            let zehnerstelle = (Zehner.get(zehner));

            if (number >= 100) {
                let hundert = Math.floor(number / 100) % 10;
                const Hundert = new Map();
                Hundert.set(0, "");
                Hundert.set(1, "C");
                Hundert.set(2, "CC");
                Hundert.set(3, "CCC");
                Hundert.set(4, "CD");
                Hundert.set(5, "D");
                Hundert.set(6, "DC");
                Hundert.set(7, "DCC");
                Hundert.set(8, "DCCC");
                Hundert.set(9, "MC");
                let hundertstelle = (Hundert.get(hundert));
                
                if (number >= 1000) {
                    let tausend = Math.floor(number / 1000);
                    const Tausend = new Map();
                    Tausend.set(1, "M");
                    Tausend.set(2, "MM");
                    Tausend.set(3, "MMM");
                    let tausendstelle = (Tausend.get(tausend));

                    document.getElementById("roem.loesung").innerHTML = "Deine Zahl entspricht: " + tausendstelle + hundertstelle + zehnerstelle + einerstelle;
                } else {
                    document.getElementById("roem.loesung").innerHTML = "Deine Zahl entspricht: " +hundertstelle + zehnerstelle + einerstelle;
                }

            } else {
                document.getElementById("roem.loesung").innerHTML = "Deine Zahl entspricht: " + zehnerstelle + einerstelle;
            }
        } else {
            document.getElementById("roem.loesung").innerHTML = "Deine Zahl entspricht: " + einerstelle;
        }
    } else {
        if (i<4) {
            document.getElementById("roem.zahlwarnung").innerHTML = "Zahl zu groß. Größt mögliche Zahl ist 3999";
            i++;
            console.log(i);
    }
    }
} else {
    document.getElementById("roem.zahlwarnung").innerHTML = "Bitte nur Zahlen eingeben";
}
}

function isNumber(number) {
    return !isNaN(number);
}

