ServerEvents.recipes(event =>
{
    let work_patty = "farmersdelight:beef_patty";
    let work_bun = "kubejs:bread_bun";

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:cogwheel_patty')
        ],
        Item.of('farmersdelight:beef_patty'),
        [
            event.recipes.createDeploying(work_patty,[work_patty,'copycats:copycat_cogwheel']),
            event.recipes.createDeploying(work_patty,[work_patty,'create:large_cogwheel'])
        ]).transitionalItem(work_patty).loops(2);

    event.recipes.create.deploying(Item.of('kubejs:andesite_bun'),[Item.of('kubejs:bread_bun'),Item.of('createdeco:andesite_sheet')]);
    event.recipes.create.mixing(Fluid.of('kubejs:mayo',50),['minecraft:egg','meadow:alpine_salt',Fluid.of('createaddition:seed_oil',25)]);
    event.recipes.create.mixing(Fluid.of('kubejs:redstone_mayo',100),[Fluid.of('kubejs:mayo',100),'create:rose_quartz']);
    event.recipes.create.mixing('kubejs:bland_clockworks_hot_burger',[Item.of('kubejs:andesite_bun',2),'kubejs:cogwheel_patty']).superheated();
    event.recipes.create.filling('kubejs:clockworks_hot_burger',['kubejs:bland_clockworks_hot_burger',Fluid.of('kubejs:redstone_mayo',25)]);
    // 
    event.recipes.create.compacting('kubejs:tea_paste',Item.of('#forge:green_tea_leaf',9));
    event.recipes.create.splashing('kubejs:washed_tea_paste','kubejs:tea_paste');
    event.recipes.smoking('kubejs:dried_tea_paste','kubejs:washed_tea_paste');
    event.recipes.create.crushing(['delightful:matcha',Item.of('minecraft:green_dye').withChance(0.05)],'kubejs:dried_tea_paste');
    event.recipes.vintage.centrifugation(Fluid.of('kubejs:spicy_lemonade',1000),[Fluid.water(1000),'minecraft:magma_block','minecraft:sugar']).processingTime(60).minimalRPM(100);
    event.recipes.create.filling('kubejs:spicy_lemonade_bottle',['minecraft:glass_bottle',Fluid.of('kubejs:spicy_lemonade',300)]);
    event.recipes.create.deploying('kubejs:matcha_cola',['kubejs:spicy_lemonade_bottle','kubejs:matcha_powder']);
    event.recipes.create.filling('kubejs:magic_matcha_cola',['kubejs:matcha_cola',Fluid.of('create:potion',50,'{Potion:"minecraft:strength"}')]);
    //
    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:netherite_chip_cookie')
        ],
        Item.of('minecraft:cookie'),
        [
            event.recipes.createDeploying('minecraft:cookie',['minecraft:cookie','kubejs:netherite_chip'])
        ]).transitionalItem('minecraft.cookie').loops(2);
    event.recipes.create.cutting(Item.of('kubejs:netherite_chip',9),'minecraft:netherite_scrap');
    event.recipes.create.compacting('minecraft:netherite_scrap',Item.of('kubejs:netherite_chip',9));
    //
    event.recipes.create.compacting('kubejs:engineers_happy_meal',['kubejs:clockworks_hot_burger','kubejs:netherite_chip_cookie','kubejs:magic_matcha_cola','create:cardboard','minecraft:red_dye']);

    event.custom({
        type:'farmersdelight:cutting',
        ingredients: [Ingredient.of('minecraft:bread').toJson()],
        result: [Item.of('kubejs:bread_bun',2).toJson()],
        tool: {tag:'forge:tools/knives'}
        }).id('kubejs:bread_bun_cutting');
})