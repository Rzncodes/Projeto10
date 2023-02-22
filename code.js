var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0d9eb3ba-cfeb-4f62-8532-faef5ba584ff","af2b4d75-e247-4d0c-a683-d79de2435f2f"],"propsByKey":{"0d9eb3ba-cfeb-4f62-8532-faef5ba584ff":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"af2b4d75-e247-4d0c-a683-d79de2435f2f":{"name":"hen","sourceUrl":"assets/api/v1/animation-library/gamelab/V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX/category_animals/cuteanimals_hen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/V9RHcfnV6v1.KxJx8hmc31xSPoEG.9lX/category_animals/cuteanimals_hen.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("hen")
  sam.scale= 0.07
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car")
  car1.scale= 0.3
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car")
  car2.scale= 0.3
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car")
  car3.scale= 0.3
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car")
  car4.scale= 0.3
  
 
//adicione velocidade para fazer o carro se mover.
 car1.velocityY = 3
 car2.velocityY = 3
 car3.velocityY = 3
 car4.velocityY = 3

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
sam.bounceOff(boundary1);
sam.bounceOff(boundary2);


//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if (keyDown("up")) {
    sam.y=sam.y -3
  }
 if (keyDown("down")) {
  sam.y=sam.y +3
    }
 if (keyDown("left")) {
   sam.x=sam.x -3
       }
 if (keyDown("right")) {
  sam.x=sam.x +3
 }
 
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
if (sam.isTouching(car1)) {
  sam.x = 20
  sam.y = 190
  life=life-1;
   playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3"); 
  }
  
  if (sam.isTouching(car2)) {
  sam.x = 20
  sam.y = 190
  life=life-1;
   playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3"); 
  }
  
  if (sam.isTouching(car3)) {
  sam.x = 20
  sam.y = 190
  life=life-1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3");
  }
  
  if (sam.isTouching(car4)) {
  sam.x = 20
  sam.y = 190
  life=life-1;
    playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3");
  }
  
  
  

    
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
