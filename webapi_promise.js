var request = require('request');
var Promise = require('promise');
//promise可把callback hell很深的拉平一層,也是把callback移到另一個callback的選擇,另一種選擇
//chain method calls(callback), avoid callback hell
//Executing asynchronous functions sequentially(callback hell can also do this, but ugly and not easy to reuse the function)
function getAuthor(id) {
	console.log("In getAuthor:");
	return new Promise(function (resolve, reject) {
		/*
		 $.ajax("http://beta.json-generator.com/api/json/get/E105pDLh",{
		 author: id
		 }).done(function(result){
		 resolve(result);
		 })
		 */
		request({
			url: 'http://beta.json-generator.com/api/json/get/E105pDLh',
			json: true,
			qs: {author: id}
		}, function (err, res, json) {
			if (err) {
				reject(err);
			}
			//console.log(json);
			resolve(json);
		});

	});
}

function getArticle(id) {
	console.log("In getArticle:");
	return new Promise(function (resolve, reject) {
		console.log("In Promise of getArticle:", id);
		/*
		 $.ajax("http://beta.json-generator.com/api/json/get/EkI02vUn",{
		 id: id
		 }).done(function(result){
		 resolve(result);
		 })
		 */
		request({
			url: 'http://beta.json-generator.com/api/json/get/EkI02vUn',
			json: true,
			qs: {id: id}
		}, function (err, res, json) {
			if (err) {
				reject(err);
			}
			//console.log(json);
			resolve(json);
		});

	});
}

function getArticleList() {
	console.log("In getArticleList:");
	return new Promise(function (resolve, reject) {
		//console.log("In Promise of getArticleList:");
		/*
		 $.ajax(
		 "http://beta.json-generator.com/api/json/get/Ey8JqwIh")
		 .done(function(result){
		 console.log("result:", result);
		 resolve(result);
		 });
		 */
		request({url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh', json: true}, function (err, res, json) {
			if (err) {
				//reject(err);
			}
			//console.log("json:", json);
			resolve(json);
		});

	});
}

getArticleList().then(function (articles) {
	//console.log("getArticleList():\n", articles);
	articles.forEach(function(article){
		//console.log("article:", article);
		getArticle(article.id).then(function (article_content) {
			//console.log("getArticle():\r\n", article_content);
			getAuthor(article_content.authorId).then(function (author) {
				console.log("author:\r\n", author);
			});
		});		
	});

});
