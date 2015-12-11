$(function() {

	var app = {
		//Clés
		allBtn : $('#all'),
		completBtn : $('#complet'),
		activeBtn : $('#active'),
		todo : $('#todo'),
		todoListe : $('#todoListe'),
		clearBtn : $('#clear'),
		//Lancement
		init : function() {
			this.watch();
			this.loadData();
		},
		watch : function() {
			this.enter(this.todo);
			this.check(this.todoListe);
			this.tous(this.allBtn);
			this.complet(this.completBtn);
			this.actif(this.activeBtn);	
			this.clickX(this.todoListe);
			this.clear(this.clearBtn);
		},
		loadData : function(){
			$.getJSON('/todos', function(donnees){
				$.each(donnees, function(cle, val) {
					app.ajout(val);
				});
			});
		},
		//Modifs Css
		cache : function(el) {
			$(el).parent().addClass('hide');
		},
		affiche : function(el){
			$(el).parent().removeClass('hide');
		},
		raye : function(el) {
			el.parent().toggleClass('raye');
		},
		//Modifs DOM
		li : function(el) {
			return "<li><input type='checkbox' />" + el + "<button><i class='fa fa-times'></i></button></li>";
		},
		ajout : function(el) {
			$('#todoListe').append(this.li(el));
		},
		supprimer : function(el) {
			$(el).parent().remove();
		},
		//Evenements
		    //Input
		enter : function(el) {
			el.keyup(function(e){
				if (e.keyCode == 13 && el.val()) {
					app.ajout(el.val());
					el.val('');
				}
			});
		},
		    //Check
		check : function(el) {
			el.on('click', ':checkbox', function() {
				app.raye($(this));
			});
		},
			//Clic croix
		clickX : function(el) {
			el.on('click', 'li button', function() {
			app.supprimer($(this));
			});
		},
		    //Boutons
		tous : function(el) {
			el.click(function(){
				app.affiche(':hidden');
			});
		},
		complet : function(el) {
			el.click(function() {
				app.cache(':checkbox:not(:checked)');
				app.affiche(':checked');
			});
		},
		actif : function(el) {
			el.click(function() {
				app.affiche(':checkbox:not(:checked)');
				app.cache(':checked');
			});
		},
		clear : function(el) {
			el.click(function() {
				app.supprimer(':checkbox:not(:hidden)');
			});
		}
	};
app.init();
console.log(app.listeItems);
});			