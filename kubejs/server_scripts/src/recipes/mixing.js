ServerEvents.recipes(event => {
    // Glucose Syrup
    event.recipes.create.mixing(Fluid.of('kubejs:glucose_syrup',125),[Item.of('kubejs:corn_starch',3),Fluid.water(100)]).heated().id('chk:glucose_syrup_from_mixing');
    // Slime Fluid
    event.recipes.create.mixing(Fluid.of('createfood:slime',250),[Fluid.water(125),Item.of('minecraft:slime_ball')]).heated().id('chk:slime_fluid_from_mixing');
    // Fried recipes
    event.recipes.create.mixing(Item.of('brewery:fried_chicken'),[Fluid.of('createfood:vegetable_oil',50),Item.of('farmersdelight:chicken_cuts')]).heated()
})      