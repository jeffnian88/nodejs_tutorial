//async嚷程式設計師寫程式寫起來像是阻塞的程式碼
//程式碼看起來比較易讀,因為減少了callback的套用
function sleep(timeout) {  
  return new Promise((resolve, reject) => {
    setTimeout(function() {
    	console.log("Hi");
      resolve("ker ker");
    }, timeout);
  });
}
const posts = [
  { title: 'Post 1', content: 'fake content'},
  { title: 'Post 2', content: 'fake content'},
];

const getPosts = () => new Promise(resolve => setTimeout(() => resolve(posts), 1000));
/*
(async function() {
  console.log('Do some thing, ' + new Date());
  await sleep(3000);
  console.log('Do other things, ' + new Date());
})();
*/
(async function() {
  console.log('Do some thing, ' + new Date());
  var ret = await sleep(1000);
  console.log('outside ret:' + ret);

  var ret = await sleep(1000).then(function (ret) {console.log("inside ret:", ret);});
  console.log('outside ret:' + ret);


  const posts = await getPosts();
  console.log('outside posts:', posts);


  console.log('Do other things, ' + new Date());
})();
