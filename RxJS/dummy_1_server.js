var io = require('socket.io')();

var user_socket_Map = new Map();
var broadcastchat = io.on('connection', function(client){
  console.log("client.id:", client.id);
  //console.log("remoteAddress:", client);
  user_socket_Map.set(client.id, client);
  client.emit('message', {"userid":0,"msg":"This message come from server", "chatroomid":0});
  client.on('disconnect', function(data) {
    //console.log("data:", data);
    // remove id from Map
    console.log("delete userid:", this.id);
    user_socket_Map.delete(this.id);
  });
});
var count = 0;
function broadcasthandler(msg){
  console.log("user_socket_Map.size:", user_socket_Map.size);
  var _msg = 
      {
        "userid":0,
        "msg": msg,
        "chatroomid":0,
        "datetime":new Date()
      };
  for (var [key, client] of user_socket_Map) {
    //console.log(key + " = " + client);
    client.emit('message', _msg);
  }
}
setInterval(broadcasthandler, 1000, "Hello Client.");
io.listen(8080);
