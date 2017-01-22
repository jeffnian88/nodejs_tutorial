var Rx = require('rxjs/Rx');
var request = require('request');

// how to limit the http request
function getLimitRange() {
  return Rx.Observable.range(0,1);
}
var limitnum = getLimitRange();
function getPostsStreamObservableWithLimit1(){
  observable = Rx.Observable.create(subscriber => {
    console.log("getPostsStreamObservableWithLimit1() invoked!!");
    request({
      url: 'https://jsonplaceholder.typicode.com/posts', json: true
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
          //console.log("getArticleStreamObservable json api call happened:");
          /*
          json.forEach(function(post){
            //console.log("getArticleStreamObservable:", article);
            subscriber.next(post);
          });
          */
          subscriber.next(json);
        //subscriber.complete();
      }
    });
  });
  return Rx.Observable.zip(observable,limitnum);
};

function getPostsStreamObservableWithLimit2(){
  observable = Rx.Observable.create(subscriber => {
    console.log("getPostsStreamObservableWithLimit2 invoked!!");
    request({
      url: 'https://jsonplaceholder.typicode.com/posts', json: true
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
          subscriber.next(json);
      }
    });
  });
  return Rx.Observable.zip(observable,limitnum);
};
getPostsStreamObservableWithLimit1().subscribe(
  x => {
    console.log("getPostsStreamObservableWithLimit1():", x);
  }
);
getPostsStreamObservableWithLimit2().subscribe(
  x => {
    console.log("getPostsStreamObservableWithLimit2():", x);
  }
);

/*
function getPostContextObserableStream(){
  return getPostsStreamObservable()
  .take(5)
  .flatMap(function(article, i){
    //console.log(article+" "+i);
    var authorobserable1 = getAuthorobservable(article.userId);
    var commentsobserable2 = getCommentsobservable(article.id);

    return Rx.Observable.zip(authorobserable1,commentsobserable2);
  });
}

var subb = getPostContextObserableStream().subscribe(
  x => {

        console.log("x[0].name(Author):",x[0].name);
        //console.log("x[1].(comment):",x[1].length);
        console.log("x[1].(comment):",JSON.stringify(x[1], null, 2).length);
        //console.log(JSON.stringify(, null, 2));
      }
        //console.log("\ngetPostContextObserableStream:\n"+x);
  );


function getCommentsobservable(article_id){
  return Rx.Observable.create(function (subscriber) {
    console.log("getCommentsobservable:",article_id);
    request({
      url: 'https://jsonplaceholder.typicode.com/posts/'+article_id+'/comments', json: true
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
        console.log("getCommentsobservable response:",article_id);
        //console.log("res:", JSON.stringify(res, null, 2));
        var comments = json;
        //console.log("getArticleobservable:", articlecontext);
        subscriber.next(comments);
        //subscriber.complete();
      }
    });
  });
}
*/

