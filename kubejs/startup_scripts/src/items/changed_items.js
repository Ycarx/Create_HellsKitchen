ItemEvents.modification(event => {
  event.modify('pamhc2foodcore:gummycreepersitem', item =>
  {
    item.foodProperties = food => {
        food.effect("herbalbrews:tough",3600,1,1);

    }
  }
  )
})