ServerEvents.recipes(event => {
//   event.recipes.create.pressing('minecraft:diamond', 'minecraft:coal_block')
//   event.recipes.create.pressing(['minecraft:diamond', 'minecraft:emerald'], 'minecraft:coal_block')
//   event.recipes.create.pressing(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.5)], 'minecraft:coal_block')
    event.recipes.create.pressing('kubejs:wax_stamp','minecraft:honeycomb');
})