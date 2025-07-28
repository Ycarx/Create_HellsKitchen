ServerEvents.recipes(event => {
    // Miners Lunch
    event.recipes.create.sequenced_assembly(Item.of('kubejs:miners_lunch'), 'kubejs:lunchbag',
    [
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('create:builders_tea')]),
        event.recipes.createDeploying('kubejs:incomplete_lunchbag',['kubejs:lunchbag', Item.of('farmersdelight:bacon_sandwich')]),
    ]).transitionalItem('kubejs:incomplete_lunchbag').loops(1);

    // Aluminum Can
    let inter_can_alu = "tfmg:aluminum_sheet";
    let inter = 'kubejs:incomplete_lunchbag';
    event.recipes.create.sequenced_assembly(Item.of('kubejs:aluminum_can'), 'tfmg:aluminum_ingot',
    [
        event.recipes.createPressing(inter_can_alu,inter_can_alu),
        event.recipes.vintage.curving(inter_can_alu, inter_can_alu).head('create:shaft')
    ]).transitionalItem(inter_can_alu).loops(1);

    const Bag_1 = (job,level, meal_, drink_) =>{
        const lunchbag = Item.of(`kubejs:${job}_lunchbag_${level}`);
        const meal = Item.of(meal_);
        const drink = Item.of(drink_);
        const id = lunchbag.getId();
        event.recipes.create.sequenced_assembly(
            lunchbag,      // Ouput
            Item.of('kubejs:lunchbag'), // Input
            [   
                event.recipes.createDeploying(inter, [inter, meal]),
                event.recipes.createDeploying(inter, [inter, drink])
            ]
        ).transitionalItem(inter).loops(1).id(id);
    }
    const Bag_2 = (job,level,dessert_) => {
        const lunchbag = Item.of(`kubejs:${job}_lunchbag_${level}`);
        const dessert = Item.of(dessert_);
        const id = lunchbag.getId();
        event.recipes.create.deploying(id,[`kubejs:${job}_lunchbag_${level-1}`,dessert])
    }
    const Bag_3 = (job,level,extras_) => {
        const lunchbag = Item.of(`kubejs:${job}_lunchbag_${level}`);
        const id = lunchbag.getId();
        let sequence_extras = [];
        if (Array.isArray(extras_)) {
            console.log('extras is an array')
           let extras = extras_.map(item => Item.of(item)); // Convert each to Item object
           extras.forEach(item => {
           sequence_extras.push(event.recipes.createDeploying(inter, [inter, item]))
            })
           event.recipes.create.sequenced_assembly(
            lunchbag,      // Ouput
            Item.of(`kubejs:${job}_lunchbag_${level-2}`), // Input
            sequence_extras
           ).transitionalItem(inter).loops(1).id(id);
        } 
        else {
            console.log('extras not an array')
           let extras = Item.of(extras_); // Single item
        event.recipes.create.deploying(id,[`kubejs:${job}_lunchbag_${level-2}`,extras])
        }
    }

// LUNCH BAGS RECIPES ------------
Bag_1('farmer','3','createfood:vegetable_sandwich_lettuce_tomato','croptopia:water_bottle');
Bag_2('farmer','4','minecraft:apple');
Bag_3('farmer','5',['minecraft:sweet_berries','minecraft:sugar']) // Example
})


// can this be deleted?
//
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