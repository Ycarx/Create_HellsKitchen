
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
    const lvl = villager.getNbt().getCompound("VillagerData").getInt("level")
    const job = villager.getNbt().getCompound("VillagerData").getString("profession").split(':')[1]
    console.log(`interacted with villager with profession ${job} and level ${lvl}`)
    //QUOTES

  const VillagerQuotes = [
    { text: "What can I do for you?", weight: 10},
    { text: "Hello.", weight: 10},
    { text: "Hey.", weight: 8},
    { text: "I'm starving.", weight: 8},
    { text: "What's Cooking?", weight: 8},
    { text: "What did I do to deserve being sent here?", weight: 2},
    { text:"I had a family with kids...", weight: 2},
    { text:"I'm working all day. When am I supposed to rest?",weight:4},
    { text:"I should have read the fineprint.",weight:1},
    { text:"I wish I could resign and go back home.",weight:1},
    { text:"The egg is not telling you the truth.",weight:1},
    { text:"Franchisee? You're their slave, like the rest of us.",weight:1},
    { text:`I was a rocket engineer up there, and now I'm a ${job}?`,weight:3}
  ]
   // --- Sélectionner une quote aléatoire ---
   const selectWeightedQuote = (quotesArray) => {
    let totalWeight = 0;
    for (const quote of quotesArray) {
      totalWeight += quote.weight;
    }
    let randomValue = Math.random() * totalWeight;
    for (const quote of quotesArray) {
      if (randomValue < quote.weight) {
        return quote.text;
      }
      randomValue -= quote.weight;
   }
   return quotesArray[0].text;
  };
  
    const randomQuote = selectWeightedQuote(VillagerQuotes);
    const randomIndex = Math.floor(Math.random() * VillagerQuotes.length)

    event.server.runCommandSilent(`tellraw @p "${customName}: ${randomQuote}"`) // Utilise tellraw pour afficher la citation au joueur

  })