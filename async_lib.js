const async= require('async');
async.waterfall([
(cb)=>{
  cb(null, '1');
},
(val, cb)=>{
  console.log("val:", val);
  cb("got error!", '2');
}],(err, val)=>{
  console.log("final error:", err);
  console.log("final val:", val);
});

async.series([
(cb)=>{
  cb(null, '1');
},
(cb)=>{
  cb("got error", '2');
},
(cb)=>{
  cb(null, '3');
}],(err, [val1,val2,val3])=>{
  console.log("final error:", err);
  console.log("final val1:", val1);
  console.log("final val2:", val2);
  console.log("final val3:", val3);
  
});