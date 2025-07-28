ServerEvents.recipes(event => {
   
    const compacting = (input,output) => {
        event.recipes.create.compacting(input,output)
    }
     // Tuff
    event.recipes.create.compacting(Item.of('minecraft:tuff', 1),[Item.of('minecraft:cobblestone', 12), Fluid.of('minecraft:water', 250)]);
    // Explosive Sugar
    event.recipes.create.compacting(Item.of('kubejs:explosive_sugar',4),[Item.of('minecraft:gunpowder',3),'minecraft:sugar']).id('chk:explosive_sugar_from_compacting');
    // Sugar Cane Juice
    event.recipes.create.compacting(Fluid.of('createfood:sugar_cane_juice',100),'minecraft:sugar_cane').id('chk:sugar_cane_fluid_from_compacting');
    // Lemon Juice
    event.recipes.create.compacting(Fluid.of('kubejs:lemon_juice',100),'lemoned:lemon');
    // Lunchbag
    event.recipes.create.compacting(Item.of('kubejs:lunchbag', 1), Item.of('create:cardboard', 2)).id('kubejs:lunchbag_from_compacting');
    compacting(Fluid.of('kubejs:olive_oil',25),Item.of('croptopia:olive',2));
})