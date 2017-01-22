var Rx = require('rxjs/Rx');
var request = require('request');
/*
// compose&chain ObserableStream
function getAuthorObserableStream(){
  return getArticleStreamObservable()
  .take(2)
  .flatMap(function(article){
    var obserable1 = getArticleobservable(article.id);
    return obserable1;

    //var obserable2 = getArticleobservable(article.id);
    //return Rx.Observable.merge(obserable1,obserable2);
    //return article.id;
  });
}
var AuthorObserable_sub = getAuthorObserableStream().subscribe(x => console.log("AuthorObserable_sub:", x));
*/

/*
// compose&chain ObserableStream
function getAuthorStream(){
  return getArticleStreamObservable()
  .flatMap(function(article){
    var obserable1 = getArticleobservable(article.id);
    return obserable1;
    //var obserable2 = getArticleobservable(article.id);
    //return Rx.Observable.zip(obserable1, function(s1){return s1});
    //return article.id;
  }).flatMap(function(articlecontext){
    var obser = getAuthorobservable(articlecontext.authorId);
    return obser;   
  });

}
//var subAS = getAuthorStream().subscribe(x => console.log("getAuthorStream:", x));
//var subAS = getAuthorStream().distinctUntilChanged(null, x=>x.id).subscribe(x => console.log("getAuthorStream:", x));
//var subAS = getAuthorStream();
//subAS.startWith("wahaha").distinctUntilChanged(null, x=>x.id).subscribe(x => console.log("getAuthorStream:", x));
//subAS.subscribe(x => console.log("getAuthorStream:", x));

*/

function getArticleNetworkObservableStream(){
  return Rx.Observable.create(function (subscriber) {
    console.log("getArticleNetworkObservableStream() was invoked!!");
    request({
      url: 'https://jsonplaceholder.typicode.com/posts', json: true
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
        //console.log("getArticleStreamObservable json api call happened:");
        json.forEach(function(article){
          //console.log("getArticleStreamObservable:", article);
          subscriber.next(article);
        });
        subscriber.complete();
      }
    });
  });
};
var articleNetworkObserableStream = getArticleNetworkObservableStream();
var articleNetworkObserableStreamSubject = new Rx.Subject();
articleNetworkObserableStream.subscribe(articleNetworkObserableStreamSubject);


var cached_obserable = {};
function getAuthorWithCachedObserable(userId){
  var authorMemoryObserable = Rx.Observable.create(function (subscriber) {
    console.log("[Memory Observable]");

    if(typeof data_in_cached !== 'undefined'){
      console.log("Hit");
      subscriber.next("Memory");
    } else {
      console.log("Miss");
      subscriber.complete();
    }
  });
  var authorNetworkObserable = getAuthorNetworkObservable(userId);
  return Rx.Observable.concat(authorMemoryObserable, authorNetworkObserable)
}
var userSet = new Set();
function getAuthorOfArticleObserableStream(){
  return articleNetworkObserableStreamSubject
  //.flatMap(function(article, i){
    .map(article => article.userId)
    .filter(function (x, idx, obs) {
      if(userSet.has(x)) {
        // already exist
        return false;
      } else {
        // dosen't exist
        userSet.add(x);
        return true;
      }
    }).flatMap(function(x){
      return getAuthorWithCachedObserable(x);
    });
}

var authorOfArticleObserableStream = getAuthorOfArticleObserableStream();

var subject_sub1 = authorOfArticleObserableStream.subscribe({
  next: (v) => {console.log("insert", v.email,"to sqlite.");}
});

var usercached = {'0':"33"};
var userdisk = {};
var count = 0;
function getAuthorNetworkObservable(author_id) {
  console.log("getAuthoroObservable():", author_id);
  return Rx.Observable.create(function (subscriber) {
    console.log("request was invoked!!", ++count, " ", author_id);
    request({
      url: 'https://jsonplaceholder.typicode.com/users/' + author_id, json: true
    }, function (err, res, json) {
      //console.log("2.cached:",cached);
      if (err) {
        //reject(err);
      } else {
        var author_data = json;

        //TODO here: copy data into memory and DB
        usercached[author_id] = author_data;
        userdisk[author_id] = author_data;
        
        subscriber.next(author_data);
      }
    });
  });
}

function handler() {
  console.log("cached:", usercached.length);
}
setTimeout(handler, 5000);

