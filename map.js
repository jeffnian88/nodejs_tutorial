var newmap = new Map();
newmap[1] = {v:"1"};
newmap[2] = {v:"2"};
newmap[3] = {v:"3"};
console.log(newmap);
nextmap = newmap.filter((k,v)=> {console.log(k,v)});
console.log(nextmap)