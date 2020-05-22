console.log("Combien y a-t-il d'éléments <p> présents dans la page HTML ?");
console.log(document.getElementsByTagName('p').length);

console.log("Quel est le contenu texte de l'élément portant l'id coucou ?");
console.log(document.getElementById('coucou').innerHTML);

console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
console.log(document.getElementsByTagName('a')[2].href)

console.log("Combien d'éléments portent la classe compte-moi ?");
console.log(document.querySelectorAll('.compte-moi').length);

console.log("Combien d'éléments <li> portent la classe compte-moi ?");
console.log(document.querySelectorAll('li.compte-moi').length);

console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
console.log(document.querySelectorAll('ol li.compte-moi').length);

console.log('Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…');
console.log(document.querySelectorAll('div ul')[1].querySelector('li').innerHTML);
