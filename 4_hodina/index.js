const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Zadej operaci: 
1. secti(a, b) - sečte a vrátí hodnoty.
2. odecte(a, b) - odečte hodnoty a vrátí.
3. nasob(a, b) - vynásobí hodnoty a vrátí.
4. del(a, b) - vydělí hodnoty a vrátí.
`, function (operace) {
    rl.question("Zadej hodnotu A:", function (a) {
        rl.question("Zadej hodnotu B:", function (b) {
            console.log(`Operace ${operace}, A: ${a}, B: ${b}`);





            //telo programu




            rl.close();
        });
    });
});

