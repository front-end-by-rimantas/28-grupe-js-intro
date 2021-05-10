/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi angu ir/ar skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis ir plotis) (metrais)
- reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima
*/

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
    let bendrasSienuPlotis = 0;

    for (let i = 0; i < sienuPlociai.length; i++) {
        const sienosPlotis = sienuPlociai[i];
        bendrasSienuPlotis += sienosPlotis;
    }

    const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);
    const plytuPlotyje = Math.ceil(bendrasSienuPlotis / plytosPlotis);

    const plytuKiekis = plytuAukstyje * plytuPlotyje;

    return plytuKiekis;
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1], 1, 0.1, 0.2), '->', 50);
console.log(bricks([1.05], 1.05, 0.1, 0.2), '->', 66);