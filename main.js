var randomObj;
var charactere = [];
var charactereP = [];
var map = [];

class Charactere {
    position;
    x;
    y;
    constructor() {
        this.x = Math.floor(Math.random() * 6);
        this.y = Math.floor(Math.random() * 6);

    }

}

class CharactereP {
    position;
    x;
    y;
    constructor() {
        this.x = Math.floor(Math.random() * 6);
        this.y = Math.floor(Math.random() * 6);

    }

}
class neighbour {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;


    }
}

window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
    loadCase(randomObj, charactere);
    map = makeMap();


});

function loadCase(randomObj, charactere) {
    
    randomObj = Math.floor(Math.random() * 6);
    console.log(randomObj);
    for (let index = 0; index < randomObj; index++) {
        charactere.push(new Charactere());
        document.getElementById("" + charactere[index].x + charactere[index].y).innerHTML = "A";

    }

    let randomP = Math.floor(Math.random() * 6 / 2);
    for (let index = 0; index < randomP; index++) {
        charactereP.push(new CharactereP());
        document.getElementById("" + charactereP[index].x + charactereP[index].y).innerHTML = "<h3 class='charactereP'>P</h3>";

    }
}

function find() {
    let X = 0,
        Y = 0;
    var vMap = [];

    for (X = 0; X < 6; X++) {
        for (Y = 0; Y < 6; Y++) {
            vMap[X, Y] = document.getElementById("" + X + Y).textContent;
        }
    }
    return vMap;
}

function makeMap() {
    let X = 0,
        Y = 0;
    var Map = find;

    for (X = 0; X < 6; X++) {
        for (Y = 0; Y < 6; Y++) {

            Map[X, Y] = document.getElementById("" + X + Y).textContent;

            if (Map[X, Y] == "A") {

                if (Y < 5) {

                    if (Map[X, Y + 1] == " " && Map[X, Y - 1] != "B" && Map[X, Y + 1] != "A" && Map[X, Y + 1] != "P") {

                        document.getElementById("" + X + (Y + 1)).innerHTML = "<h3>B</h3>"

                    } else if (Map[X, Y - 1] == " " && Map[X, Y - 1] != "A" && Map[X, Y - 1] != "P") {

                        document.getElementById("" + X + (Y - 1)).innerHTML = "<h3>c</h3>"

                    } else {

                        document.getElementById("" + X + (Y + 1)).innerHTML = "<h3>B</h3>"
                        console.log(" rrr");
                    }

                }else if (Map[X, Y - 1] == " " && Map[X, Y - 1] != "A" && Map[X, Y - 1] != "P"){
                    document.getElementById("" + X + (Y - 1)).innerHTML = "<h3>c</h3>"
                }
            }
        }

    }
    return Map;
}

