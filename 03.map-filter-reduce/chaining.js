// 1 gram tłuszczu to 9 kcal
// 1 gram węglowodanów to 4 kcal
// 1 gram białka to 4 kcal
// Znając powyższe dane "stwórz sałatkę owocową" z produktów, które mają mniej niż 50 kcal.
// Wyświetl na ekranie ile posiłek będzie zawierał białka, tłuszczy i węglowodanów,
// oraz ile będzie miał sumarycznie kalorii.
// Wykorzystaj dowolne znane Ci techniki aby osiągnąć rezultat

const products = [
    {name: "Apple", fat: 0.4, carbs: 10, whey: 0.4},
    {name: "Plum", fat: 0.3, carbs: 10, whey: 0.6},
    {name: "Banana", fat: 0.3, carbs: 21, whey: 1}
];

function calculateCalories({fat, carbs, whey}) {
    return parseInt(9 * fat + 4 * carbs + 4 * whey);
}

const meal = products
    .map(product => ({ kcal: calculateCalories(product), ...product }))
    .filter(product => product.kcal < 50)
    .reduce((acc, product) => {
        acc['kcal'] = (acc['kcal'] || 0) + product.kcal;
        acc['fat'] = (acc['fat'] || 0) + product.fat;
        acc['carbs'] = (acc['carbs'] || 0) + product.carbs;
        acc['whey'] = (acc['whey'] || 0) + product.whey;
        return acc;
    }, {});

const {kcal, fat, carbs, whey} = meal;

console.log(`Moja sałatka zawiera ${kcal} kcal, w tym: ${fat} g. tłuszczy, ${carbs} g. węglowodanów, ${whey} g. białka `);
