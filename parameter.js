let uid=123, name='456';
let obj = {uid, name};

function test123({uid, name}){
  console.log(uid);
  console.log(name);
}
console.log(`${JSON.stringify(obj)}`);
test123(obj);


