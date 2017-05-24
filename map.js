

let keyMapIndex = {'123':1, '456':2};
function removeKey(keyMapIndex, key, list) {

let nextKeyMapIndex = Object.assign({}, keyMapIndex);
nextKeyMapIndex['123'] = 12;
return nextKeyMapIndex;
}
let nextKeyMapIndex = removeKey(keyMapIndex);
console.log(keyMapIndex);
keyMapIndex['456'] = 99;
console.log(nextKeyMapIndex);