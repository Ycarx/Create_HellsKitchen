StartupEvents.registry("item", (event) => {
const professions = [
    'minecraft:farmer', 
    'minecraft:fisherman', 
    'minecraft:mason',
    'minecraft:armorer', 
    'minecraft:butcher', 
    'minecraft:cleric',
    'minecraft:fletcher', 
    'minecraft:leatherworker',
    'minecraft:librarian',
    'minecraft:shepherd',
    'minecraft:toolsmith',
    'minecraft:weaponsmith',
    'etched:bard',
    'vinery:winemaker',
    'meadow:hermit',
    'meadow:cheesemaker', 
    'candlelight:cook',
    'brewery:brewmaster',
    'villagersplus:horticulturist',
    'villagersplus:alchemist',
    'villagersplus:oceanographer',
    'villagersplus:occultist',
    'morevillagers:forester',
    'morevillagers:netherologist',
    'morevillagers:enderologist',
    'morevillagers:engineer',
    'morevillagers:florist',
    'morevillagers:hunter',
    'morevillagers:miner'
  ]

  const tiers = {
    'Iron' : 'iron',
    'Golden' : 'gold',
    'Diamond' : 'diamond'
  };

  const layeredItem = (id, displayName, textures) => {
    const textureLayers = {};
    textures.forEach((texture, index) => {
        textureLayers[`layer${index}`] = texture;
    });
    event.create(id)
        .displayName(displayName)
        .modelJson({
            "parent": "item/generated",
            "textures": textureLayers
        });
  };

  
  professions.forEach((professionId, professionIndex) => {
    
    const professionName = professionId.split(':').pop();
    
    for (const [tierDisplayName, tierName] of Object.entries(tiers)) {
        for (let level = 2; level <= 5; level++) {
            let itemID = `${tierName}_${professionName}_lunchbag_${level}`;
            
            let finalDisplayName = `${tierDisplayName} ${professionName.charAt(0).toUpperCase() + professionName.slice(1)}'s Lunch Bag (Level ${level})`;
            let textures = [
                `kubejs:item/lunchbag_base`,
                `kubejs:item/icons/${professionName}/${tierName}`,
                `kubejs:item/icons/level_${level}`
            ];
            
            layeredItem(itemID, finalDisplayName, textures);
        }
    }
  });
  
});