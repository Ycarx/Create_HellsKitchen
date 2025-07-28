// Villager Trades
const VillagerProgression = Java.loadClass("btpos.mcmods.hellskitchenmixins.api.vanilla.VillagerProgression")
VillagerProgression.setLevelXPValues(0,20,120,360,1080)//0,10,70,150,250
//
// 

ItemEvents.entityInteracted(event => {
    /**@type {Internal.Villager_} */
    const villager = event.target
    if(villager.type != "minecraft:villager") return;
    const {persistentData: pData, offers, nbt} = villager
    const lv = nbt.getCompound("VillagerData").getInt("level")
    const p = villager.getNbt().getCompound("VillagerData").getString("profession").split(':')[1]
    console.log(`interacted with villager with profession ${p} and level ${lv}`)
    if(!event.player.tags.contains(`ftbquests.met_${p}`))
    {
      event.player.tags.add(`ftbquests.met_${p}`)
      console.log(`met ${p}`)
      return;
    }
    const hasForgotten = pData.getInt("hasForgotten")
    const toForget = pData.getInt("toForget")
    if(!toForget) pData.putInt("toForget", offers.size())
    if(lv -1 == hasForgotten) return;
    Array(toForget).fill(0).forEach(n => offers.remove(0))
    pData.putInt("toForget", offers.size())
    pData.putInt("hasForgotten", lv -1)
    
  })
const customTaskHire = (questId,job) => {
  FTBQuestsEvents.customTask(questId, event => {
    event.maxProgress = 1 // Sets the Progress Count.
    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    event.setCheck((task, player)=> {
      console.log(`checking task for quest ${questId} and job ${job}`);
      if (player.tags.contains(`ftbquests.met_${job}`)) {
        console.log(`has player met ${job}?`)
        task.progress++;
        player.tags.remove(`ftbquests.met_${job}`);
      }
    })
})
}
customTaskHire('54D20CBC2D3D50D1','farmer');
customTaskHire('24A01586F2D66138','shepherd');
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
        - bk:beekeeper — bk:honey_extractor
*/
MoreJSEvents.villagerTrades((event) => {
  let trade = (profession,level,input, output, exp) => {
    const tradeObj = event.addTrade(profession, level, input, output);
    tradeObj.villagerExperience(exp);
    tradeObj.maxUses(999);
  }
  event.removeVanillaTrades();
  event.removeModdedTrades();
  // FARMER TRADES ----------*/
    trade('minecraft:farmer',1,Item.of('minecraft:wheat',8),Item.of('numismatics:spur',1),1);
    trade('minecraft:farmer',2,Item.of('brewery:potato_salad',1),Item.of('numismatics:spur',2),1);
    trade('minecraft:farmer',3,Item.of('kubejs:farmer_lunchbag_3',1),Item.of('numismatics:spur',6),2);
    trade('minecraft:farmer',4,Item.of('kubejs:farmer_lunchbag_4',1),Item.of('numismatics:spur',8),4);
    trade('minecraft:farmer',5,Item.of('kubejs:farmer_lunchbag_5',1),Item.of('numismatics:bevel',1),8);
    trade('minecraft:farmer',5,[Item.of('kubejs:farmer_lunchbag_5',1),Item.of('kubejs:wax_stamp',1)],Item.of('kubejs:farmer_seal'),8);
  // SHEPHERD TRADES 
    trade('minecraft:shepherd',1,Item.of('farmersdelight:fried_egg',1),Item.of('numismatics:spur',2),1);
    trade('minecraft:shepherd',2,Item.of('farmersdelight:cabbage_rolls',2),Item.of('numismatics:spur',4),1);
    trade('minecraft:shepherd',3,Item.of('kubejs:shepherd_lunchbag_3',1),Item.of('numismatics:bevel',1),2);
    trade('minecraft:shepherd',4,Item.of('kubejs:shepherd_lunchbag_4',1),Item.of('numismatics:bevel',1),4);
    trade('minecraft:shepherd',5,Item.of('kubejs:shepherd_lunchbag_5',1),Item.of('numismatics:bevel',1),8);
    trade('minecraft:shepherd',5,[Item.of('kubejs:shepherd_lunchbag_5',1),Item.of('kubejs:wax_stamp',1)],Item.of('numismatics:bevel',1),8);
    
    // // Horticulturist Progression --------
    trade('villagersplus:horticulturist',1,Item.of('minecraft:oak_leaves',8),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',1,Item.of('minecraft:fern',4),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',2,Item.of('delightful:green_tea_leaf',1),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',2,Item.of('kubejs:black_tea_leaf',2),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',3,Item.of('herbalbrews:dried_green_tea',1),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',3,Item.of('herbalbrews:dried_black_tea',2),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',4,Item.of('kubejs:oolong_tea_leaf',2),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',4,Item.of('herbalbrews:dried_oolong_tea',2),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',5,Item.of('delightful:matcha',2),Item.of('numismatics:spur',1),1);
    trade('villagersplus:horticulturist',5,Item.of('herbalbrews:dried_oolong_tea',2),Item.of('numismatics:spur',1),1);
    // // ADD BAKER + WORK STATION
    // // Florist Trades
    let flowerItems = Ingredient.of('#minecraft:flowers').getItemIds();
    flowerItems.forEach(flower => {
        trade('morevillagers:florist',1,Item.of(flower,2),Item.of('numismatics:spur'),1);
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
        for (let i = currentLevel; i <=5; i++){
        let tradesPool = VillagerUtils.getVillagerTrades(professionId,i);
          for (const trade of tradesPool)
        {
            event.getOffers().removeIf(offer =>{
              let removeFlax = offer.getFirstInput().getId() === 'supplementaries:flax_seeds'
              return !!removeFlax
            })
            console.log(`${trade.toString()} for villager level ${i}`)           
            event.addRandomOffer([trade])
        }}
    });
});

