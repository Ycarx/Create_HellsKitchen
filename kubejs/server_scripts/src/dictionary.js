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
    //event.add('forge:green_tea_leaf','delightful:green_tea_leaf');
    //event.add('forge:green_tea_leaf','herbalbrews:green_tea_leaf');
})