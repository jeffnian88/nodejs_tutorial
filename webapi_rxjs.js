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

function getArticleStreamObservable(){
  return Rx.Observable.create(function (subscriber) {
    console.log("getArticleStreamObservable() was invoked!!");
    request({
      url: 'http://beta.json-generator.com/api/json/get/Ey8JqwIh', json: true
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
var obserable = getArticleStreamObservable();
//var sub1 = obserable.subscribe(x => console.log("sub1:", x));
//var sub2 = obserable.subscribe(x => console.log("sub2:", x));

var subject = new Rx.Subject();

obserable.subscribe(subject); // 你可以传递Subject来订阅observable

var subject_sub1 = subject.subscribe({
  next: (v) => console.log('subject_sub1: ', v , " draw UI")
});
var subject_sub2 = subject.subscribe({
  next: (v) => console.log('subject_sub2: ', v , " is inserted to DB")
});


/*
function getArticleobservable(article_id){
  return Rx.Observable.create(function (subscriber) {
    request({
      url: 'http://beta.json-generator.com/api/json/get/EkI02vUn', json: true, qs: {id: article_id}
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
        //console.log("getArticleobservable json api call happened:");
        var articlecontext = json;
        //console.log("getArticleobservable:", articlecontext);
        subscriber.next(articlecontext);
        subscriber.complete();
      }
    });
  });
}
function getAuthorobservable(author_id){
  return Rx.Observable.create(function (subscriber) {
    request({
      url: 'http://beta.json-generator.com/api/json/get/E105pDLh', json: true, qs: {author: author_id}
    }, function (err, res, json) {
      if (err) {
        //reject(err);
      } else {
        
        //console.log("getAuthorobservable json api call happened:");
        var author = json;
        //console.log("getAuthorobservable:", author);
        subscriber.next(author);
        subscriber.complete();
      }
    });
  });
}

*/