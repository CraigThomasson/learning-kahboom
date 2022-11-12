import kaboom from 'kaboom'

kaboom({
    width: 700,
    height: 700,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    background: [ 0, 0, 255, ],
})

loadSprite("bean", "sprites/bean.png")
loadSprite("ground", "sprites/ground.png")
// add a character to screen
const player = add([
// list of components
sprite("bean"),
pos(80, 40),
area(),
body(),
]);

const MOVE_SPEAD = 200


// player movement
onKeyDown("a", () => {
    player.move(-MOVE_SPEAD, 0)
})

onKeyDown("d", () => {
    player.move(MOVE_SPEAD, 0)
})

onKeyPress("w", () => {
    if(player.isGrounded()) {
        player.jump()
    }
})

// maps

addLevel([
'                    ',
'                    ',
'              xxx   ',
'       xxx          ',
'  xxxxxxxxxxxx      ',
], {
width: 31,
height: 100,
"x": () => [
    sprite("ground"),
    area(),
    solid(),
],
})