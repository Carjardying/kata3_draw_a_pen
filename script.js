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

const crayon = `
 /\\
/__\\
||||
||||
||||
||||
||||
||||
||||
||||
||||
||||
|__|
|  |
|__|`; // voir comment intégrer le caractère special "\"

console.log(crayon);

/* créer une fonction qui navigue dans l'objet et affiche plus ou moins de barres en fonction du mois.
si c'était un tableau : boucle for => chaque fois que je passe à l'index ++, 1ligne de |||| en moins.
traduire ça */
let moisMars = calendrierDuCrayon.mars;
console.log("appel hors fonction: " , moisMars);

function drawMyPen(calendrier){
    const month = calendrier.mois; //vu que ça change

    for (let index = 0; index < calendrier; index++) {
        console.log("boucle dans fonction for : "); // ne fonctionne pas
        
    };

    for (const element of calendrier) {
        console.log("boucle for of : ",element); // epelle le nom du mois 
    }

}



drawMyPen('mars'); //affiche mars et non le crayon