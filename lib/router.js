// Route pour la home
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('home', {main: ''});
  }
});

// Route pour un article
FlowRouter.route('/article/:_id', {
  name: 'single_article',
  action() {
    BlazeLayout.render('single_article', {main: ''});
    Session.set("article_id", this._id);
  }
});
// Route pour les bookmarks
FlowRouter.route('/bookmarked', {
  name: 'bookmarked',
  action() {
    BlazeLayout.render('bookmarked', {main: ''});
  }
});
