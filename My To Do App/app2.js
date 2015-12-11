$(function() {

	var app = {
		//Clés
		allBtn : $('#all'),
		completBtn : $('#complet'),
		activeBtn : $('#active'),
		input : $('#todo'),
		liste : $('#todoListe'),
		clearBtn : $('#clear'),
		form : $('form'),
		//Lancement
		init : function() {
			this.watch();
			this.loadData();
		},
		watch : function() {
			this.sendForm(this.form);
			this.check(this.liste);
			this.tous(this.allBtn);
			this.complet(this.completBtn);
			this.actif(this.activeBtn);	
			this.clickX(this.liste);
			this.clear(this.clearBtn);
		},
		//Appels Ajax à Node
		loadData : function(){
			$.getJSON('/todos', function(donnees){
				$.each(donnees, function(cle, val) {
					app.ajout(val);
				});
			});
		},
		deleteItem : function(url, el) {
			$.ajax({
				url : '/todos?item=' + el,
				type : 'DELETE',
			});
		},
		post : function(el) {
			$.post('/todos', {item : el})
				.done(function(data){
					app.ajout(data);
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
			this.liste.append(this.li(el));
		},
		supprimer : function(el) {
			el.parent().remove();
		},
		//Evenements
			//Form
		sendForm : function(el){
			el.submit(function(e){
				e.preventDefault();
				if(app.input.val()) {
					app.post(app.input.val());	
					app.input.val('');
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
				app.deleteItem('', $(this).parent().text());
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
				var supp = $(':checkbox:not(:hidden)');
				for(var i = 0, c = supp.length; i < c; i++){
					app.deleteItem('', $(i).parent().text());
				}
				app.supprimer(supp);
			});
		}
	};
app.init();
});			