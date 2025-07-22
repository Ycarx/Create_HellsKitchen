
ServerEvents.recipes(event =>{
    event.recipes.create.splashing('kubejs:black_tea_leaf','delightful:green_tea_leaf').id('black_tea_leaf');
    event.smoking('herbalbrews:dried_black_tea','kubejs:black_tea_leaf').id('chk:dried_black_tea');
    event.smoking('herbalbrews:dried_oolong_tea','kubejs:oolong_tea_leaf').id('chk:dried_oolong_tea');
    event.smoking('herbalbrews:dried_green_tea','delightful:green_tea_leaf').id('chk:dried_green_tea');
    event.recipes.vintage.pressurizing(['kubejs:oolong_tea_leaf',Fluid.water(50)],[Fluid.water(250),'delightful:green_tea_leaf']);
    
    // -- SHAPELESS
    event.shapeless(Item.of('meadow:eriophorum',2),'meadow:eriophorum_tall').id('meadow:eriophorum'); 

    // -- SHAPED
    event.shaped(Item.of('kubejs:lunchbag', 8),['aaa','a a','aaa'],{a: 'create:cardboard'}).id('kubejs:lunchbag');

    // -- CREATE
    event.recipes.create.crushing('kubejs:corn_starch',Item.of('brewery:corn')).id('chk:corn_from_crushing');
    event.recipes.create.mixing(Fluid.of('kubejs:glucose_syrup',125),[Item.of('kubejs:corn_starch',3),Fluid.water(100)]).heated().id('chk:glucose_syrup_from_mixing');
    event.recipes.create.compacting(Item.of('kubejs:explosive_sugar',4),[Item.of('minecraft:gunpowder',3),'minecraft:sugar']).id('chk:explosive_sugar_from_compacting');
    event.recipes.create.mixing(Fluid.of('createfood:slime',250),[Fluid.water(125),Item.of('minecraft:slime_ball')]).heated().id('chk:slime_fluid_from_mixing');
    event.recipes.create.compacting(Fluid.of('createfood:sugar_cane_juice',100),'minecraft:sugar_cane').id('chk:sugar_cane_fluid_from_compacting');
    event.recipes.create.compacting(Fluid.of('kubejs:lemon_juice',100),'lemoned:lemon');
    let inter_can_alu = "tfmg:aluminum_sheet";
    event.recipes.create.sequenced_assembly(Item.of('kubejs:aluminum_can'), 'tfmg:aluminum_ingot',
    [
        event.recipes.createPressing(inter_can_alu,inter_can_alu),
        event.recipes.vintage.curving(inter_can_alu, inter_can_alu).head('create:shaft')
    ]).transitionalItem(inter_can_alu).loops(1);
    event.recipes.create.compacting(Item.of('kubejs:lunchbag', 1), Item.of('create:cardboard', 2)).id('kubejs:lunchbag_from_compacting');
    event.recipes.create.sequenced_assembly(Item.of('kubejs:miners_lunch'), 'kubejs:lunchbag',
    [
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('create:builders_tea')]),
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('farmersdelight:bacon_sandwich')]),
    ]).transitionalItem('kubejs:incomplete_lunchbag').loops(1);
});

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