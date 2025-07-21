// Villager Trades

//
// 

ItemEvents.entityInteracted(event => {
    /**@type {Internal.Villager_} */
    const villager = event.target
    if(villager.type != "minecraft:villager") return;
    const {persistentData: pData, offers, nbt} = villager
    const lv = nbt.getCompound("VillagerData").getInt("level")
    const p = nbt.getCompound("VillagerData").getString("profession")
    console.log(`interacted with villager with profession ${p} and level ${lv}`)
    if (p === "minecraft:farmer" ) {
      event.player.addTag('ftbquests.met_farmer');
      console.log('met farmer');
    }
    const hasForgotten = pData.getInt("hasForgotten")
    const toForget = pData.getInt("toForget")
    if(!toForget) pData.putInt("toForget", offers.size())
    if(lv -1 == hasForgotten) return;
    Array(toForget).fill(0).forEach(n => offers.remove(0))
    pData.putInt("toForget", offers.size())
    pData.putInt("hasForgotten", lv -1)
    
  })
FTBQuestsEvents.customTask('54D20CBC2D3D50D1', event => {
    event.maxProgress = 1 // Sets the Progress Count.
    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    event.setCheck((task, player)=> {
      console.log('checking task');
      if (player.tags.contains('ftbquests.met_farmer')) {
        task.progress++;
        player.tags.remove('ftbquests.met_farmer');
      }
    
    })
})

/* Professions ID list :
        - minecraft:cartographer — minecraft:cartography_table
        - minecraft:farmer — minecraft:composter
        - minecraft:fisherman — minecraft:barrel
        - minecraft:mason — ùinecraft:stone_cutter
        - minecraft:armorer — minecraft:blast_furnace
        - minecraft:butcher — minecraft:smoker  
        - minecraft:cleric — minecraft:brewing_stand
        - minecraft:fletcher — minecraft:fletching_table
        - minecraft:leatherworker — minecraft:cauldron
        - minecraft:librarian — minecraft:lectern
        - minecraft:shepherd — minecraft:loom
        - minecraft:toolsmith — minecraft:smithing_table
        - minecraft:weaponsmith — minecraft:grindstone
        - etched:bard — minecraft:note_block
        - vinery:winemaker — vinery:fermentation_barrel
        - meadow:hermit — meadow:woodcutter
        - meadow:cheesemaker — meadow:cheese_rack
        - candlelight:cook — candlelight:cooking_pot
        - brewery:brewmaster — brewery:bar_counter
        - villagersplus:horticulturist — villagersplus: <wood_type>_horticulturist_table
        - villagersplus:alchemist — villagersplus:alchemist_table
        - villagersplus:oceanographer — villagersplus:oceanographer_table / morevillagers: oceanography_table
        - villagersplus:occultist — villagersplus:occultist_table
        - morevillagers:forester - morevillagers:woodworking_table
        - morevillagers:netherologist - morevillagers:decayed_workbench
        - morevillagers:enderologist - morevillagers:purpur_altar
        - morevillagers:engineer - morevillagers:blueprint_table
        - morevillagers:florist - morevillagers:gardening_table
        - morevillagers:hunter - morevillagers:hunting_post
        - morevillagers:miner - morevillagers:mining_bench
*/
MoreJSEvents.villagerTrades((event) => {
  let trade = (profession,level,input, output, maxUse) => {
    const tradeObj = event.addTrade(profession, level, [input], output);
    if (typeof maxUse !== 'undefined') {
      tradeObj.maxUses(maxUse);
    }
    tradeObj.villagerExperience(1);
    tradeObj.priceMultiplier(0.05);
  }
  event.removeVanillaTrades();
  event.removeModdedTrades();
  /* Villager EXP Progression : 
  1 -> 2 = 10
  2 -> 3 = 70
  3 -> 4 = 150
  4 -> 5 = 250
  Farmer Progression ----------*/
    trade('minecraft:farmer',1,TradeItem.of('minecraft:wheat',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('minecraft:potato',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('minecraft:apple',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('minecraft:beetroot',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('#forge:crops/onion',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('#forge:crops/corn',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('#forge:crops/cabbage',8),TradeItem.of('numismatics:spur'));
    // trade('minecraft:farmer',1,TradeItem.of('#forge:crops/tomato',8),TradeItem.of('numismatics:spur'));
    //-------------------
   
    trade('minecraft:farmer',2,TradeItem.of('createfood:shredded_beetroot',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',2,TradeItem.of('createfood:sliced_beetroot',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',2,TradeItem.of('createfood:sliced_carrot',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',2,TradeItem.of('createfood:sliced_potato',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',2,TradeItem.of('createfood:sliced_tomato',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',2,TradeItem.of('create:dough',8),TradeItem.of('numismatics:spur'));
    //-------------------
    trade('minecraft:farmer',3,TradeItem.of('createfood:bread_lettuce_carrot',8),TradeItem.of('numismatics:spur'));
    trade('minecraft:farmer',3,TradeItem.of('miners_delight:cave_carrot',12),TradeItem.of('numismatics:spur'));
    // // Horticulturist Progression --------
    trade('villagersplus:horticulturist',1,TradeItem.of('minecraft:oak_leaves',8),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',1,TradeItem.of('minecraft:fern',4),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',2,TradeItem.of('delightful:green_tea_leaf',1),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',2,TradeItem.of('kubejs:black_tea_leaf',2),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',3,TradeItem.of('herbalbrews:dried_green_tea',1),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',3,TradeItem.of('herbalbrews:dried_black_tea',2),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',4,TradeItem.of('kubejs:oolong_tea_leaf',2),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',4,TradeItem.of('herbalbrews:dried_oolong_tea',2),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',5,TradeItem.of('delightful:matcha',2),TradeItem.of('numismatics:spur'));
    trade('villagersplus:horticulturist',5,TradeItem.of('herbalbrews:dried_oolong_tea',2),TradeItem.of('numismatics:spur'));
    // // ADD BAKER + WORK STATION
    // // Florist Trades
    let flowerItems = Ingredient.of('#minecraft:flowers').getItemIds();
    flowerItems.forEach(flower => {
        trade('morevillagers:florist',1,TradeItem.of(flower,2),TradeItem.of('numismatics:spur'));
    })
    
});
const professionList = [
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
    'morevillagers:oceanographer',
    'villagersplus:oceanographer',
    'villagersplus:occultist',
    'morevillagers:forester',
    'morevillagers:netherologist',
    'morevillagers:enderologist',
    'morevillagers:engineer',
    'morevillagers:florist',
    'morevillagers:hunter',
    'morevillagers:miner'
    //'kubejs:baker'
  ]
MoreJSEvents.updateVillagerOffers((event) => {
    event.deleteAddedOffers();
    professionList.forEach((professionId) => {
        if (!event.isProfession(professionId)) {
            return;
        }
        const currentLevel = event.getVillagerLevel();
        console.log(`${professionId}, level ${currentLevel}`);
        const existingTrades = event.getAddedOffers();
        console.log(`${existingTrades}, length ${existingTrades.length}`);
        const tradesPool = event.getVillagerTrades(professionId, currentLevel);
        for (const trade of tradesPool)
          {
            event.addRandomOffer([trade])
        }
    });
});

