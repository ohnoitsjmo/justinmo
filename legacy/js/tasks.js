function insertImages() {
	var feed = new Instafeed({
        get: 'user',
        resolution: 'standard_resolution',
        sortBy: 'most-liked',
        template: '<a href="{{link}}"><img class="col-md-4 col-xs-12" src="{{image}}" /></a>',
		userId: '35507318',
		accessToken: '35507318.467ede5.4eafe0ca5c1e45738bff0af1b73d2eee',
        limit: 9
    });
    feed.run();
}

function insertEmail() {
	var username = 'mianuddin';
	var hostname = 'gmail.com';
	var linktext = 'mianuddin@gmail.com';
	document.getElementById('contact').innerHTML = '<a id="email" href="' + 'mail' + 'to:' + username + '@' + hostname + '">' + linktext + '</a>';
}

(function (){
	insertImages();
	insertEmail();
})();