StartupEvents.registry("item", (event) => {
  // --- LISTES DE CONFIGURATION ---
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
    'villagersplus:oceanographer', // Doublon retiré, une seule instance ci-dessous
    //'morevillagers:oceanographer',
    'villagersplus:occultist',
    'morevillagers:forester',
    'morevillagers:netherologist',
    'morevillagers:enderologist',
    'morevillagers:engineer',
    'morevillagers:florist',
    'morevillagers:hunter',
    'morevillagers:miner',
    'kubejs:baker'
  ];

  const tiers = {
    'Iron' : 'iron',
    'Golden' : 'gold',
    'Diamond' : 'diamond'
  };

  // --- FONCTION DE CRÉATION D'OBJET ---
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

  // --- BOUCLE DE GÉNÉRATION ---
  professions.forEach((professionId) => {
    const professionName = professionId.split(':').pop();
    const professionDisplayName = professionName.charAt(0).toUpperCase() + professionName.slice(1);
    
    for (const [tierDisplayName, tierName] of Object.entries(tiers)) {
        for (let level = 1; level <= 4; level++) {
            // ID généré directement en minuscules pour plus de sécurité
            const itemID = `${tierName}_${professionName}_lunchbag_${level}`;
            const finalDisplayName = `${tierDisplayName} ${professionDisplayName}'s Lunch Bag (${level})`;
            const textures = [
                `kubejs:item/lunchbag_base`,
                `kubejs:item/icons/${professionName}_${tierName}`,
                `kubejs:item/icons/level_${level}`
            ];
            layeredItem(itemID, finalDisplayName, textures);
        }
    }
  });
});
