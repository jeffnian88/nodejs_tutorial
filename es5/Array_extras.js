var data = [1,2,3];
var newData = data.map(function(a){return a*a;});
console.log(newData);

var sum = newData.reduce(function(soFar, next) { return soFar + next; })
console.log('sum:', sum);

var filteredData = newData.filter(function(x){return x>1;});
console.log('filteredData:', filteredData);

newData.forEach(function(x){console.log('x:', x+1);});

-KfzhxjpvVTnPNkoQE90
'customerId', 'customerFBId', 'customerName', 'customerPhotoURL', 'storeId', 'storeFBId', 'storeName', 'storePhotoURL'