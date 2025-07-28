ServerEvents.recipes(event => {
//   event.recipes.create.milling('minecraft:diamond', 'minecraft:coal_block')
//   event.recipes.create.milling(['minecraft:diamond', 'minecraft:emerald'], 'minecraft:coal_block')
// //   event.recipes.create.milling(['minecraft:diamond', Item.of('minecraft:diamond').withChance(0.5)], 'minecraft:coal_block')
    event.recipes.create.milling('minecraft:sand','minecraft:dirt');

})
