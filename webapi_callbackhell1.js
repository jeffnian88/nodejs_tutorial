var request = require('request');


function getArticleList(errcallback) {
	request({
		url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh',
		json: true
	}, function (err, res, json) {
		if (err) {
			errcallback(err);
		}
		//console.log("json:", json);
		var articles = json;
		articles.forEach(function(article){
			request({
				url: 'http://beta.json-generator.com/api/json/get/EkI02vUn',
				json: true,
				qs: {id: article.id}
			}, function (err, res, json) {
				if (err) {
					errcallback(err);
				}
					//console.log(json);
					request({
						url: 'http://beta.json-generator.com/api/json/get/E105pDLh',
						json: true,
						qs: {author: json.authorId}
					}, function (err, res, json) {
						if (err) {
							errcallback(err);
						}
						console.log(json);
						//callback(json);
					});

				});
		});
	});
}

getArticleList();