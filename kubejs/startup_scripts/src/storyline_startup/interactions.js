ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerWakeUpEvent', event => {
  if (event.wakeImmediately()) return;
  // got out of bed, not slept through night
  global.onWakeUp(event)
})