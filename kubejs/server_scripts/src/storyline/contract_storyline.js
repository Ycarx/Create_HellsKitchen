ItemEvents.firstRightClicked("kubejs:contract", event => {
    if (event.hand != "MAIN_HAND" || event.player.mainHandItem.isEmpty()) return
    event.server.runCommandSilent(`playsound minecraft:entity.villager.celebrate ambient ${event.player.username}`)
    event.server.runCommand(`tellraw ${event.player.username} "[Fred Eggs]: After thorough investigation, we have concluded that we are not responsible for the damage you may have endured. Please proceed immediately and get to work. We have provided your island with extensive energy generation equipment."`);
    event.player.mainHandItem = Item.of('kubejs:signed_contract');
})