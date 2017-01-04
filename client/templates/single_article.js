// Je récupère ici l'id en session et ainsi accède au contenu spécifique d'un article
Template.single_article.helpers
(
    {
        getArticles : function()
        {
            var article_id = Session.get("article_id");
            return articles.findOne({_id: article_id});
        }

     }
);
// Acceder à la liste de l'accueil
Template.single_article.events
({
  'click .home' : function (event) {
    console.log("Retour à l'accueil");
    FlowRouter.go('/');
  }
});
// Acceder aux bookmarks
Template.single_article.events
({
  'click .filter' : function (event) {
    console.log("Affichage de l'article: "+ this._id);
    FlowRouter.go('/bookmarked/');
  }
});
