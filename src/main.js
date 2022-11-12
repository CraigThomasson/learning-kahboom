import kaboom from 'kaboom'

kaboom()

loadSprite("bean", "sprites/bean.png")
loadSprite("ground", "sprites/ground.png")
// add a character to screen
add([
// list of components
sprite("bean"),
pos(80, 40),
area(),
]);

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