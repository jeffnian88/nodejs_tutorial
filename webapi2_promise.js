var request = require('request');
var Promise = require('promise');
function getPostContext(){
  return getPostsPromise().then(function(articles) {
    //var article = articles[0];
    articles.some((article,index) => {
      //console.log("article:", JSON.stringify(article, null, 2));
      var comments = getCommentsPromise(article.id);
      var author = getAuthorPromise(article.userId);

      Promise.all([author, comments])
      .then((values) => {
        //console.log("values:", JSON.stringify(values, null, 2));
        //console.log("\ntitle:", article.title, values[0].name);
        console.log("\nindex:", index);
        var out = "titleID:" + article.id
        + "\ntitle:" + article.title
        + "\nAuthorName:" + values[0].name
        + "\nComments:" + JSON.stringify(values[1], null, 2).length;
        console.log(out);
      });
      
      if(index > 3){
        return true;
      }
    });

  });
}
var ret = getPostContext();
console.log("ret:", ret);
function getPostsPromise(){
  return new Promise(function (resolve, reject) {
    request({
      url: 'https://jsonplaceholder.typicode.com/posts', json: true
    }, function (err, res, json) {
      if (err) {
        reject(err);
      } else {
        resolve(json);
      }
    });
  });
};
function getCommentsPromise(article_id){
  return new Promise(function (resolve, reject) {
    console.log("getCommentsPromise:",article_id);
    request({
      url: 'https://jsonplaceholder.typicode.com/posts/'+article_id+'/comments', json: true
    }, function (err, res, json) {
      if (err) {
        reject(err);
      } else {
        resolve(json);
      }
    });
  });
}
function getAuthorPromise(author_id){
  return new Promise(function (resolve, reject) {
    console.log("getAuthorPromise:", author_id);
    request({
      url: 'https://jsonplaceholder.typicode.com/users/'+author_id, json: true
    }, function (err, res, json) {
      if (err) {
        reject(err);
      } else {
        resolve(json);
      }
    });
  });
}
