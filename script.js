const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

const crayon = [`
 /\\
/__\\
`]; // voir comment intégrer le caractère special "\"

console.log("crayon simple", crayon);

/* créer une fonction qui navigue dans l'objet et affiche plus ou moins de barres en fonction du mois.
si c'était un tableau : boucle for => chaque fois que je passe à l'index ++, 1ligne de |||| en moins.
traduire ça */
// const moisMars = calendrierDuCrayon.mars;
// console.log("appel hors fonction: " , moisMars);

function drawMyPen(calendrier, mois){
    let months = calendrier[mois]; //vu dans l'exercice avec les candidates dragrace

    for (let index = 0; index < months ; index++) {
        console.log("||||") // resultat undefined
        // crayon.push("||||"); // senser ajouter ça au crayon
    };
    // return crayon.join("\n") // pour joindre le push au reste dans une seule string
}



console.log(drawMyPen('mars'));