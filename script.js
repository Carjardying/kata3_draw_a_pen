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

const crayon = `/
/__
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

// console.log(crayon);

/* créer une fonction qui navigue dans l'objet et affiche plus ou moins de barres en fonction du mois.
si c'était un tableau : boucle for => chaque fois que je passe à l'index ++, 1ligne de |||| en moins.
traduire ça */


function drawMyPen(mois){
 console.log(mois);
 if (mois.key == 'mars') {
    crayon -= `||||
||||
||||
||||
||||
||||`
console.log(crayon); //si placé or du if, affiche le crayon complet.
 } //pour tenter. Ne fonctionnera surement pas.
 
 }


drawMyPen('mars'); //affiche mars et non le crayon