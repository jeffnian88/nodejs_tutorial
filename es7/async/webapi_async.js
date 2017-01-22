var request = require('request');

const getArticleList = () => new Promise(resolve => request({url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh', json: true}, function (err, res, json) {
			if (err) {
				//reject(err);
			} else {
			//console.log(json);
				resolve(json);
			}
		}));

const getArticle = () => new Promise(resolve => request({url: 'http://beta.json-generator.com/api/json/get/EkI02vUn', json: true}, function (err, res, json) {
			if (err) {
				//reject(err);
			} else {
			//console.log(json);
				resolve(json);
			}
		}));

const getAuthor = () => new Promise(resolve => request({url: 'http://beta.json-generator.com/api/json/get/E105pDLh', json: true}, function (err, res, json) {
			if (err) {
				//reject(err);
			} else {
			//console.log(json);
				resolve(json);
			}
		}));

var ourImportantFunction = async function() {
    //... some code 1
    var articles = await getArticleList();
    console.log("articles:", articles);
    //... some code 2
    var article = await getArticle(articles[0].id);
    console.log("article:", article);
    //... some code 3
    var author = await getAuthor(article.authorId);
    console.log("author:", author);
}

ourImportantFunction();