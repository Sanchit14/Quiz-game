class Game{
  constructor(){

  }
  display(){
    background(panda);
  }
 

 getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })

}

update(state){
  database.ref('/').update({
    gameState: state
  });
}

 keyPressed(){
  if(keyCode===32){
    gameState=2;
    background(panda);

  }
 }
}

