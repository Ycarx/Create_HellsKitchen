ServerEvents.recipes(event => {
//   event.recipes.create.filling('minecraft:water_bucket', [Fluid.water(), 'minecraft:bucket'])
    event.recipes.create.filling(Item.of('croptopia:water_bottle',8),[Fluid.water(1000),'minecraft:glass'])
})