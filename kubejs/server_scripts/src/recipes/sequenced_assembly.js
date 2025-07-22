ServerEvents.recipes(event => {
    // Miners Lunch
    event.recipes.create.sequenced_assembly(Item.of('kubejs:miners_lunch'), 'kubejs:lunchbag',
    [
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('create:builders_tea')]),
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('farmersdelight:bacon_sandwich')]),
    ]).transitionalItem('kubejs:incomplete_lunchbag').loops(1);

    // Aluminum Can
    let inter_can_alu = "tfmg:aluminum_sheet";
    event.recipes.create.sequenced_assembly(Item.of('kubejs:aluminum_can'), 'tfmg:aluminum_ingot',
    [
        event.recipes.createPressing(inter_can_alu,inter_can_alu),
        event.recipes.vintage.curving(inter_can_alu, inter_can_alu).head('create:shaft')
    ]).transitionalItem(inter_can_alu).loops(1);

})


// can this be deleted?

// ServerEvents.recipes(event => {
//     event.remove({ id:"createqol:sequenced_assembly/shadow_radiance_helmet" })

//     let inter = Item.of("create_dd:incomplete_sealed_mechanism")
//     event.recipes.create.sequenced_assembly("createqol:shadow_radiance_helmet", "create:netherite_diving_helmet", [
//         event.recipes.createDeploying(inter, [inter, "createqol:shadow_radiance"]),
//         event.recipes.vintageimprovements.laser_cutting(inter, inter).energyCost(500).maxChargeRate(100),
//         event.recipes.vintageimprovements.hammering(inter, inter).hammerBlows(10).anvilBlock("minecraft:netherite_block"),
//         event.recipes.createDeploying(inter, [inter, "create:goggles"]),
//         event.recipes.createDeploying(inter, [inter, "tfmg:screw"]),
//         event.recipes.createDeploying(inter, [inter, "tfmg:screwdriver"]),
//     ]).transitionalItem(inter).loops(1)
// })