ServerEvents.recipes(event => {
    // Dried Black Tea
    event.smoking('herbalbrews:dried_black_tea','kubejs:black_tea_leaf').id('chk:dried_black_tea');
    // Dried Oolong Tea
    event.smoking('herbalbrews:dried_oolong_tea','kubejs:oolong_tea_leaf').id('chk:dried_oolong_tea');
    // Dried Green Tea
    event.smoking('herbalbrews:dried_green_tea','delightful:green_tea_leaf').id('chk:dried_green_tea');
})