ItemEvents.firstRightClicked("kubejs:contract", event => {
    if (event.hand != "MAIN_HAND" || event.player.mainHandItem.isEmpty()) return
    event.server.runCommandSilent(`playsound minecraft:entity.villager.celebrate ambient ${event.player.username}`)
    const player = event.player;
    BeginDialogue(player, 'npc_fredeggs', 'After thorough investigation, we have found that we are not liable for the damage you may have endured. Please proceed immediately and get to work. We have provided your island with extensive energy generation equipment.');

    // event.server.runCommand(`tellraw ${event.player.username} "[Fred Eggs]: After thorough investigation, we have found that we are not liable for the damage you may have endured. Please proceed immediately and get to work. We have provided your island with extensive energy generation equipment."`);
    event.player.mainHandItem = Item.of('kubejs:signed_contract');
})
global.onWakeUp = event => {
    let player = event.entity;
    if(player.tags.contains('chk.slept')) return;
    player.addTag('chk.slept');
    BeginDialogue(player, 'npc_fredeggs', 'Sleeping on the job is held in bad regard. I had higher expectations of you and sincerely deplore your lack of work ethics.');

}


