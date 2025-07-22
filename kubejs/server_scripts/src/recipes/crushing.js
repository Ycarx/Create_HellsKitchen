ServerEvents.recipes(event => {
    // Corn Starch
    event.recipes.create.crushing('kubejs:corn_starch',Item.of('brewery:corn')).id('chk:corn_from_crushing');  
})