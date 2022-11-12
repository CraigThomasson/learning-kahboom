import kaboom from 'kaboom'

kaboom()

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
onKeyDown("left", () => {
    player.move(-MOVE_SPEAD, 0)
})

onKeyDown("right", () => {
    player.move(MOVE_SPEAD, 0)
})

// maps

addLevel([
'          ',
'          ',
'xxxxxxxxxx',
], {
width: 31,
height: 100,
"x": () => [
    sprite("ground"),
    area(),
    solid(),
],
})