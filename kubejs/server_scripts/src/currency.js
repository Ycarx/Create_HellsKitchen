PlayerEvents.tick(event => {
    if (event %20 != 0) return;
  const player = event.player
  const inv = player.inventory

  inv.removeMatchingItems(i => i.item == 'minecraft:diamond')
})