// Configuration: Changez par votre feed favoris ! (à venir, un feed stocké dans MongoDB :D )
var feed_url = "https://radiovl.fr/feed";

// Je récupère le contenu d'un feed en XML
HTTP.get( feed_url, {}, function(error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    var contenu = response.content;

    /*
     Je le récupère je le parse et je le mets en base \o/
    */
    var xmlDoc = $.parseXML(contenu);
    var xml = $(xmlDoc);
    var $item = xml.find("item");
    var $title = xml.find("title");
    var $date = xml.find("pubDate");
    for (i = 1; i <= 6; i++){
        $desc = $.parseHTML($(xmlDoc.querySelectorAll("description")[i]).text())[0].innerHTML;
        $title_inner = $title[i+1].innerHTML;
        $cate_inner = $.parseHTML($(xmlDoc.querySelectorAll("category")[i+1]).text()).textContent;
        $date_inner = $date[i+1].innerHTML;
        articles.insert(
            {
               title : $title_inner.substring(0, 35) + " [...]",
               author: "", // Emplacement prévu
               bookmark: false,
               desc : $desc.substring(0, 250),
               cate : $cate_inner, //ne fonctionne pas .. parcours du XML à corriger
               date: $date_inner.substring(0, 12),
               img_url: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/QV4PABZOJN.jpg"//Image par défaut mais l'idée est ensuite de la récuperer aussi dans le XML
          }
          );

    }
  }
});

// Système de notif
Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top',
        timeout: 2000,
        html: false,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //    limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
        onClose: _.noop //
        // examples:
        // onClose: function() {
        //     /* Code here will be executed once the alert closes. */
        // }
    });

});
