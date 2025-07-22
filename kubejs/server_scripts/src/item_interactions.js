ItemEvents.firstRightClicked("kubejs:villager_capsule", event => {
    if (event.hand != "MAIN_HAND" || event.player.mainHandItem.isEmpty()) return

    // Commande simplifiée pour invoquer le villageois à la position du joueur
    event.server.runCommand(`/execute at @p run summon villager`)

    // Retire l'objet de la main du joueur après utilisation
    event.player.mainHandItem.count--
})