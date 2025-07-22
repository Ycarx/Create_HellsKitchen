ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cooking(
	    [
            'minecraft:potato',
            'minecraft:carrot',
            'minecraft:beetroot',
            Item.of('#forge:corn')
        ],
	    'brewery:potato_salad', // output
	    30, // exp
	    10, // cookTime
	    'minecraft:bowl', // container
	);
})