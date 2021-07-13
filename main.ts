
let foobar = sprites.create(assets.image`asfd`, SpriteKind.Player)
foobar.setStayInScreen(true)  
//controller.moveSprite(foobar, 100, 100)
light.showAnimation(light.rainbowAnimation, 500)
// acceleration from the "controller" extension
let xScale = 14  // 10 works well
let yScale = 10  // 10 works well
forever(
function () 
{
    foobar.x = controller.acceleration(ControllerDimension.X) / xScale + 
                scene.screenWidth()/2
    foobar.y = controller.acceleration(ControllerDimension.Y) / yScale + 
                scene.screenHeight()/2 + 60
    // JS method for click detection?
    console.logValue("x", controller.acceleration(ControllerDimension.X))
    console.logValue("y", controller.acceleration(ControllerDimension.Y))
    console.logValue("z", controller.acceleration(ControllerDimension.Z))
}
);
