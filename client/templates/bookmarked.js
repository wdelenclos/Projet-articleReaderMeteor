// Je récupère ici les articles étants bookmarkés "true"
Template.bookmarked.helpers
(
    {
        getBookmarked : function()
        {
          return articles.find({bookmark: true});
        }

     }
);

// Acceder à la liste de l'accueil
Template.bookmarked.events
({
  'click .home' : function (event) {
    console.log("Retour à l'accueil");
    FlowRouter.go('/');
  }
});
// modifier les attribut d'un article pour le mettre en "bookmarked = false" pour qu'il puisse ensuite aller dans les bookmarkés
Template.bookmarked.events
({
  'click .button' : function (event) {
    sAlert.error('Retiré des bookmarks');
    articles.update(
      {_id: this._id},
      {
       $set: {bookmark: false}
      }
    );
  }
});
