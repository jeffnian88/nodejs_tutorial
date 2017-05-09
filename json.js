let obj = {
  "cotype":"hi",
  "items":[{"itemId":"-KfpMAOETy9j4MnaOsBr","quanity":1}],
  "buyerAddress":"h1",
  "buyerTelephone":"h2",
  "storeId":"VMh5l3YCwIRLOjEU4iLs0aWho4i1",
  "remarks": "h3"
};
//console.log("obj:", JSON.stringfy(obj));
var cotype = "cotype";
var newobj = {obj.cotype};
console.log("newobj:", newobj);
// From String to Objest
//JSON.parse(jsonString);
let json = {
  "-KfpMAOETy9j4MnaOsBr": {
    "imgurl": {
      "url": "http://www.hongya88.com.tw/archive/file/images/005.png"
    },
    "name": "漢堡",
    "price": 30,
    "status": "onsale"
  },
  "-KfpMAOKzlwpwnqRbwVn": {
    "imgurl": {
      "url": "http://biranger.tw/wp-content/uploads/2013/03/coffee-time1.png"
    },
    "name": "咖啡",
    "price": 20,
    "status": "onsale"
  },
  "-KfpMAOL8kfclz9wcLzE": {
    "imgurl": {
      "url": "http://virtusjustitia.vjcdn.com/wp-content/uploads//2015/02/Bowl-of-Chips-650x433.jpg"
    },
    "name": "薯條",
    "price": 30,
    "status": "onsale"
  },
  "-KfpMAOMQiF0IDP_ODHs": {
    "imgurl": {
      "url": "http://s1.gigacircle.com/media/s1_5395260dd6db6.jpg"
    },
    "name": "可樂",
    "price": 30,
    "status": "onsale"
  },
  "-KfpMAONpcygPdVMKjrM": {
    "imgurl": {
      "url": "http://038333538.tw.tranews.com/Show/images/News/3291494_1.jpg"
    },
    "name": "雞腿便當",
    "price": 80,
    "status": "onsale"
  }
};
console.log(Object.keys(json).length);
