var eventEmitter = new events.EventEmitter();

/*
var Rx = require('rxjs/Rx');
var io = require('socket.io')();
var events = require('events');



var user_socket_Map = new Map();

var user_subscription_Map = new Map();

var broadcastchat = io.on('connection', function(client){
  console.log("client.id:", client.id);
  //console.log("remoteAddress:", client);
  // record socket map
  if(user_socket_Map.has(client.id)) {
    // client.id already exist.
    // TODO here:
    
  } else {
    // client.id didn't exist.
    // TODO here:
    user_socket_Map.set(client.id, client);
  }

  //TODO here:
  // 1.get channel list of specific user from mongodb
  // 2.user subscribe all channel of redis
  // ChannelList.forEach(channel){ channel.id};
  var subject = getChatRoomSubjectSingleton();//channel.id
  var subscription = subject.subscribe({
    next: (msg) => {
      console.log("Server send message to ", client.id);
      client.emit('message', msg);
    }
  });
  // record subscription map
  user_subscription_Map.set(client.id, subscription);

  client.on('disconnect', function(data) {
    console.log("user left:",this.id);
    console.log("delete userid:", this.id);

    //unsubscribe
    if(user_subscription_Map.has(this.id)) {
      user_subscription_Map.get(this.id).unsubscribe();
      user_subscription_Map.delete(this.id);
      // remove id from Map
      
    }
    if(user_socket_Map.has(this.id)) {
      user_socket_Map.delete(this.id);
    }
  });
});
var count = 0;
var ChatRoomSubjectMap = new Map();
function getChatRoomSubjectSingleton(channel_id) {
  if(ChatRoomSubjectMap.has(channel_id)) {
    return ChatRoomSubjectMap.get(channel_id);
  }

  var chatroomObserable = Rx.Observable.create(function (subscriber) {
    console.log("getChatRoomSubjectSingleton() was invoked!!");

    //TODO here:
    // 1.subscribe channel_id from redis.
    eventEmitter.on('redis_channel_id', (data)=>subscriber.next(data));
    
  });
  var chatroomSubject = new Rx.Subject();
  chatroomObserable.subscribe(chatroomSubject);
  ChatRoomSubjectMap.set(channel_id, chatroomSubject);
  return chatroomSubject;
};

function timerhandler(){
  var _msg = 
  {
    "user_id":0,
    "msg": "message from server",
    "channel_id":0,
    "datetime":new Date()
  };
  eventEmitter.emit('redis_channel_id', _msg);
}
//setInterval(timerhandler, 1000);


io.listen(8080);
*/
var koa = require('koa');
var app = new koa();
var router = require('koa-router');
//var bodyParser = require('koa-bodyparser');
var body = require('koa-better-body');
app.use(bodyParser());
/*
app.use(function *(){
  //this.body = { "hello": 'world' };//'Hello World';
  this.body = 'Hello World';
});
*/
api = router();
api.get('/test', function (ctx, next) => {
  ctx.body = { ok: true };
  await next();
});
api.post('/channel/:id', body(), function (ctx, next) => {
  //console.log("channel_id:", this.params.id);
  //var msgjson = yield parse(this);
  //console.log("body:", msgjson);
  //this.body = JSON.stringify(this.request.body);
  console.log("this.request.body:", this.request.body);
  var msg = {};
  var body = ctx.request.body;
  msg.user_id = 0;
  msg.msg = body.message;
  msg.channel_id = 0;
  msg.created_on = new Date();
  eventEmitter.emit('redis_channel_id', msg);
  ctx.status = 200;
  await next();
});

app.use(api.routes());
app.use(function * () {
    console.log(this.request.body)    // if buffer or text
    console.log(this.request.files)   // if multipart or urlencoded
    console.log(this.request.fields)  // if json
  }).use(api.allowedMethods());
app.listen(3000);
