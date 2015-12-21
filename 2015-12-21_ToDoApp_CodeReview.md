# Organisation du workspace
Les projets vont rapidement grossir et il est important dès le début de bien séparer chaque composant (SoC, vous vous rappellez ?). Voici une suggestion d'organisation
[Projet]
- [js] : dossier contenant les fichiers js
- [css] : dossier contenant les fichiers css
- index.html : dans ce projet, un seul fichier html, donc on peut le laisser à la racine du projet


# Commentaires
Ne soyez pas avares en commentaire ! Sur le Css, le Js ou le Html : commentez, commentez et commentez encore. 
Par exemple, dans le app.js, juste avant le code qui contrôle les boutons liés au "tableau de bord", un petit commentaire qui permet de bien marquer la différence : 
/*
	Fonctions des boutons liés au dashboard :
	- show all
	- show only active
	- show only completed
	- clear completed
*/
[... les fonctions ...]


# Décomposer chaque étape en sous-étapes
## Gagner en lisibilité
## Améliorer la maintenabilité
Une ligne doit MAXIMUM être de 80 caractères !
Donc au lieu d'enchaîner les mega-instructions : 

$('.applicationToDoList').append('<div class="item"><input type="checkbox" name="elementsliste" id="checkboxID"/><button class="close">X</button>' + aAjouter + '</div>');

Décomposer : 
- créer une nouvelle variable qui va contenir le nouvel élément
- aller à la ligne pour rendre le tout digeste
- utiliser cette nouvelle variable

De cette manière, si vous devez modifier un attribut, c'est beaucoup plus accessible.

var newElmt = '<div class="item">' 
	+ '<input type="checkbox" name="elementsliste" id="checkboxID"/>'
	+ '<button class="close">X</button>' + aAjouter + '</div>');

$('.applicationToDoList').append(newElmt);

# Indentation
Indenter, c'est comme les commentaires : ca aide à structurer le code et ca rend le code digeste,
et agréable à lire.
Même sur les balises de base :
<html>
	<head>
		...
	</head>
	<body>
		<p>
			...
		</p>
	</body>
</html>

# Références des fichiers Js et Css
Les fichiers Css doivent être références dans le <head>.
Néanmoins, le code Js n'est utile qu'une fois que la page est prête (vous comprenez mainteant l'instruction : $(document).ready(...) ;). C'est pourquoi, afin que le contenu Html se charge plus vite (en fait, avant de télécharger le code Js), la bonne pratique est d'ajouter ses références aux scripts Js tout à la fin de son Html, juste avant de ferme </body>
<html>
	<head>
		...
	</head>
	<body>
		<p>
			...
		</p>
		...
		<script type="text/javascript" src="jquery-2.1.4.js"></script>
		<script type="text/javascript" src="app.js"></script>
	</body>
</html>


# Si vous commentez une partie de votre code ...
Expliquez pourquoi vous l'avez laissé malgré le fait qu'il soit commenté. Mettez vous à la place d'un collègue qui va découvrir votre code et qui doit comprendre sans vous appeler. 
Et si le code est inutile : REMOVE IT ! 


# <title>
C'est la balise ultra importante : 
- visibile dans la barre du navigateur
- nom par défaut si la page est "bookmarké
- utilisé par les moteurs de recherche pour référencer la page

Donc, soyez pertinents et mettez les mots-clés

