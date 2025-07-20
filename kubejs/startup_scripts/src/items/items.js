StartupEvents.registry("item", (event) => {
    const item = (displayName) => {
        const id = displayName.replace(/ /g, '_').toLowerCase();
        event.create(id)
            .texture(`kubejs:item/${id}`)
            .displayName(displayName);
    }
    item('Black Tea Leaf');
    item('Oolong Tea Leaf');
    item('Corn Starch');
    item('Explosive Sugar');
    item('Aluminum Can')
    item('Contract');
    item('Signed Contract');
    item('Lunchbag');
    item('Incomplete Lunchbag');
    item('Miners Lunch');
    
    event.create('energy_drink').displayName('Energy Drink').texture('kubejs:item/energy_drink');
    event.create('fred_eggs').displayName('Fred Eggs').texture('kubejs:item/fredeggs');
        
    
    const seal = (displayName) => {
        const id = displayName.replace(/ /g, '_').toLowerCase();
        event.create(id)
            .texture(`kubejs:item/seals/${id}`)
            .displayName(`${displayName}'s Seal of Approval`);
    }
    seal('Farmer');
    seal('Fisherman');
    seal('Hunter');
    seal('Shepherd');
    seal('Florist');
    seal('Forester');

    // const layeredItem = (displayName,textures)=>{
    //     const id = displayName.replace(/ /g, '_').toLowerCase();
    //     const textureLayers = {};
    //     textures.forEach(texture, index => {
    //         textureLayers[`layer${index}`] = texture;
    //     });
    //     event.create(id)
    //         .displayName(displayName)
    //         .modelJson({
    //             "parent": "item/generated",
    //             "textures": textureLayers
    //         })
    // }
    // layeredItem('Miner Lunchbag',[
    //     'kubejs:item/miners_lunch',
    //     'kubejs:item/icons/miner_iron'
    // ]);
    
});
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
        
        
})