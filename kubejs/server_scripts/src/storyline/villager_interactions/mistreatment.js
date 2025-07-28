EntityEvents.death(event => {
    if (event.source.getType() != 'player') return;
    const player = event.source.getPlayer();
    if (event.entity.nbt.VillagerData.profession != 'minecraft:none') {
                event.server.runCommandSilent(`execute at ${player.username} run summon lightning_bolt ~ ~ ~`);
                BeginDialogue(player, 'npc_fredeggs', 'You have been punished as a result for the loss of a Productive Employed Life.');
            }
});