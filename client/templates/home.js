
// Recupération des articles en base
Template.home.helpers
(
    {
        getArticles : function()
        {
             return articles.find();
        }

     }
);
// Suppression d'un article de la base
Template.home.events
({
  'click .archive_btn' : function (event) {
    event.preventDefault();
    console.log(this._id);
    articles.remove(
      {_id: this._id}
    );
  }
});

// Acceder au contenu de l'article
Template.home.events
({
  'click .next_btn' : function (event) {
    event.preventDefault();
    console.log("Affichage de l'article: "+ this._id);
    FlowRouter.go('/article/' + this._id);
  }
});

// modifier les attribut d'un article pour le mettre en "bookmarked = true" pour qu'il puisse ensuite aller dans les bookmarkés
Template.home.events
({
  'click .button' : function (event) {
    sAlert.error('Enregistré');
    articles.update(
      {_id: this._id},
      {
       $set: {bookmark: true}
      }
    );
  }
});

// Acceder au contenu de l'article ( au clic sur l'article)
Template.home.events
({
  'click .Article_main_contener' : function (event) {
    console.log("Affichage de l'article: "+ this._id);
    FlowRouter.go('/article/' + this._id);
  }
});

// Acceder aux bookmarks
Template.home.events
({
  'click .filter' : function (event) {
    console.log("Accès aux bookmarkés");
    FlowRouter.go('/bookmarked/');
  }
});
