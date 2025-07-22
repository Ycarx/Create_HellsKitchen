ItemEvents.entityInteracted(event => {
    /**@type {Internal.Villager_} */
    const villager = event.target
    if(villager.type != "minecraft:villager") return;
    // if (Math.random() < 0.5) {
    //     return; // Sortir de la fonction, donc aucune citation ne sera affichée.
    // }
    const {persistentData: nbt} = villager
    const customNameString = villager.getCustomName().toString();
    let startIndex = customNameString.indexOf('{');
    let endIndex = customNameString.indexOf('}');
    let customName = "";
    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex){
      customName = customNameString.substring(startIndex + 1, endIndex);
    }
    const lv = nbt.getCompound("VillagerData").getInt("level")
    const p = nbt.getCompound("VillagerData").getString("profession")
    console.log(`interacted with villager with profession ${p} and level ${lv}`)

   // --- Sélectionner une quote aléatoire ---
    const randomIndex = Math.floor(Math.random() * VillagerQuotes.length)
    const randomQuote = VillagerQuotes[randomIndex]

    event.server.runCommandSilent(`tellraw @p "${customName}: ${randomQuote}"`) // Utilise tellraw pour afficher la citation au joueur

  })
  const VillagerQuotes = [
    "What did I do to deserve being sent here?",
    "I had a family with kids...",
    "I'm working day and night, this can't be legal?"
  ]