// ItemEvents.entityInteracted(event => {
//     /**@type {Internal.Villager_} */
//     const villager = event.target
//     if(villager.type != "minecraft:villager") return;
//     const {persistentData: nbt} = villager
//     const p = nbt.getCompound("VillagerData").getString("profession")
//     const lvl = nbt.getCompound("VillagerData").getInt("level")
//     console.log(`interacted with villager with profession ${p} and level ${lvl}`)
// })