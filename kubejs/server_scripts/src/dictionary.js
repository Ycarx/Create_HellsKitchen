ServerEvents.tags('item', event => {

    for (const item of Utils.getRegistryIds('item')){
        let itemObject = Item.of(item);
        if (itemObject.isEdible()){
            event.add('forge:edible',item)
        }
    }
    event.remove('forge:crops/cabbage','farmersdelight:cabbage_leaf');
    event.add('forge:seeds/tomato','candlelight:tomato_seeds')
    event.add('vintage:curving_heads','create:shaft',);
    event.add('forge:seeds/oat','bakery:oat_seeds');
    event.add('forge:barley_seeds', 'brewery:barley_seeds');
    event.add('forge:dough/wheat',['candlelight:dough','bakery:dough','createfood:salt_dough','pamhc2foodcore:doughitem']);
    event.add('forge:friedegg',['croptopia:sunny_side_eggs','farmersdelight:fried_egg'])
    //salt

    //event.add('forge:green_tea_leaf','delightful:green_tea_leaf');
    //event.add('forge:green_tea_leaf','herbalbrews:green_tea_leaf');
})