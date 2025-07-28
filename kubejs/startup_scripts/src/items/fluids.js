
StartupEvents.registry("fluid", (event) => {
    event.create('glucose_syrup')
        .displayName('Glucose Syrup')
        .stillTexture('kubejs:fluid/glucose_syrup_still')
        .flowingTexture('kubejs:fluid/glucose_syrup_flow')
        .bucketColor(0xaaa191)
        //--------------
    event.create('sparkling_water')
        .thinTexture(0x639bff)
        .bucketColor(0x639bff)
        .displayName('Sparkling Water')
        //---------------
    event.create('lemon_juice')
        .thinTexture(0xfeff8b)
        .bucketColor(0xfeff8b)
        .displayName('Lemon Juice')
        //---------------
    event.create('liquid_energy')
        .thinTexture(0x29f6d2)
        .bucketColor(0x29f6d2)
        .displayName('Liquid Energy')
        //---------------
    event.create('olive_oil')
        .thinTexture(0xf4da3c)
        .bucketColor(0xf4da3c)
        .displayName('Olive Oil')
        //---------------
    event.create('soy_sauce')
        .thinTexture(0x6f3333)
        .bucketColor(0x6f3333)
        .displayName('Soy Sauce')
        
        
})