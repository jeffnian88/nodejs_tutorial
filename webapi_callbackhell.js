var request = require('request');
function getAuthor(id, callback, errcallback) {
	console.log("In getAuthor:");
		request({
			url: 'http://beta.json-generator.com/api/json/get/E105pDLh',
			json: true,
			qs: {author: id}
		}, function (err, res, json) {
			if (err) {
				errcallback(err);
			}
			//console.log(json);
			callback(json);
		});
}

function getArticle(id, callback, errcallback) {
	console.log("In getArticle:");
		console.log("In Promise of getArticle:", id);
		request({
			url: 'http://beta.json-generator.com/api/json/get/EkI02vUn',
			json: true,
			qs: {id: id}
		}, function (err, res, json) {
			if (err) {
				errcallback(err);
			}
			//console.log(json);
			callback(json);
		});
}

function getArticleList(cb, errcallback) {
	console.log("In getArticleList:");
	request({
		url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh',
		json: true
	}, function (err, res, json) {
			if (err) {
				errcallback(err);
			}
			//console.log("json:", json);
			cb(json);
	});
}

getArticleList(callback1);
function callback1(articles){
	articles.forEach(function(article){
		getArticle(article.id, callback2);
		function callback2(article_content){
			getAuthor(article_content.authorId, callback3);
			function callback3 (author){
				console.log("author:\r\n", author);
			};
		};
	});
};
