//  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var scrollableContent = document.getElementById('scrollable-content');

const createDivColor = () => {
	var randomColor = Math.floor(Math.random() * 16777215).toString(16);
	var divColor = document.createElement('div');
	divColor.className = 'image';
	divColor.id = `${randomColor}`;

	scrollableContent.appendChild(divColor);
	divColor.style.backgroundColor = `#${randomColor}`;
};

window.addEventListener('scroll', function () {
	scrollableContent = document.getElementById('scrollable-content');

		// scrollY represente la hauteur de l'element(window)
	var scrollTop = window.scrollY;


	// scrollHeight mesure la hauteur du contenu d'un element y compris la partie invisible lié au défilement
	var scrollHeight = scrollableContent.scrollHeight;


	// représente la hauteur visible d'un élément sans tenir compte du défilement
	var clientHeight = scrollableContent.clientHeight;

	//vérifie si la somme de scrollTop et clientHeight est supérieur à la hauteur totale du contenu defilable
	// donc si hateur window + hateur defilement + element scrollableContent n'est pas inférieur à la hauteur visible de scrollableContent, => créer un element
	if (scrollTop + clientHeight >= scrollHeight) {
		// on pourrait aussi envoyer une requête
		createDivColor();
	}
});
