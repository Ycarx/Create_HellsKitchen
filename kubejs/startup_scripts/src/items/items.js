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
    item('Villager Capsule');
    item('Wax Stamp');
    
    event.create('energy_drink').displayName('Energy Drink').texture('kubejs:item/energy_drink');
    event.create('fred_eggs').displayName('Fred Eggs').texture('kubejs:item/fredeggs');
        
    
    const seal = (displayName) => {
        const id = displayName.replace(/ /g, '_').toLowerCase();
        event.create(`${id}_seal`)
            .texture(`kubejs:item/seals/${id}`)
            .displayName(`${displayName}'s Seal of Approval`);
    }

    seal('Farmer');
    seal('Fisherman');
    seal('Hunter');
    seal('Shepherd');
    seal('Florist');
    seal('Forester');
    seal('Beekeeper');
    seal('Baker');
    
});