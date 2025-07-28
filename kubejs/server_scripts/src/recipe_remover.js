// priority: 999
ServerEvents.recipes(event => {
    // RECIPE REMOVER -----------------------
    //removing types
    const r = (args) => {
        event.remove(args);
    }
    const rId = (id) => {
        event.remove({id:id})
    }
    const rInOut = (item,type) => {
        if(type==undefined)
        {
        event.remove([{input:item},{output:item}]);
        }
        else
        {
        event.remove([{input:item,type:type},{output:item,type:type}]);
        }
    }
    rId('numismatics:crafting/bank_terminal')
    rId('croptopia:olive_oil')
    rId('croptopia:soy_sauce')
    rId('farmersdelight:mixing/cooked_rice_fluid')
    rId('conditional:create/mixing/cake_dough')
    rId('/meadow:cooking_pot/*/')
    rId('/bakery:pot_cooking/*/')
    rId('/bakery:baking_station/*/')
    rId('/bakery:crafting_bowl/*/')
    rId('/meadow:cheese_form/*/')
    event.remove({id:'minecraft:farmersdelight.dough'})
    rInOut('minecraft:egg','minecraft:crafting_shapeless')
    rInOut('minecraft:egg','minecraft:crafting_shaped')
    event.remove({output:'brewery:fried_chicken'})
    event.remove({input:'#forge:flour',type:'minecraft:crafting_shapeless'})
    event.remove({input:'#forge:flour',type:'minecraft:crafting_shaped'})
    event.remove({input:'#forge:butter',type:'minecraft:crafting_shapeless'})
    event.remove({input:'#forge:butter',type:'minecraft:crafting_shaped'})
    event.remove({input:'#forge:sweet_dough',type:'minecraft:crafting_shapeless'})
    event.remove({input:'#forge:sweet_dough',type:'minecraft:crafting_shaped'})
    event.remove({output:'createfood:butter_dough',type:'minecraft:crafting_shapeless'})
    rInOut('createfood:butter_dough_small')
    rInOut('createfood:butter_dough_small')
    rInOut('createfood:salt_dough_small')
    rInOut('createfood:salt_dough_small')
    rInOut('createfood:wheat_dough_small')
    rInOut('createfood:wheat_dough_small')
    rInOut('createfood:chocolate_sugar_dough_small')
    rInOut('createfood:chocolate_sugar_dough_small')
    rInOut('createfood:sugar_dough_small')
    rInOut('createfood:sugar_dough_small')
    event.remove({output:'#forge:dough',type:'minecraft:crafting_shaped'})
    event.remove({output:'#forge:dough',type:'minecraft:crafting_shapeless'})
    event.remove({type:'bakery:stove'})
    event.remove({type:'vinery:wine_fermentation'})
    event.remove({output:'vinery:fermentation_barrel'})
    event.remove({output:'vinery:crimson_fermentation_barrel'})
    event.remove({output:'vinery:warped_fermentation_barrel'})  
    event.remove({id:'/candlelight:pan_cooking/'});
    event.remove({id:'/candlelight:pot_cooking/'});
    event.remove({output:'candlelight:cooking_pot'});
    event.remove({output:'candlelight:cooking_pan'});
    event.remove({output:'#forge:edible',type:'minecraft:smelting'});
    event.remove({output:'#forge:edible',type:'minecraft:crafting_shaped'});
    event.remove({output:'#forge:edible',type:'minecraft:crafting_shapeless'});
    event.remove({id:'farmersdelight:roast_chicken_block'});
    event.remove({id:'farmersdelight:honey_glazed_ham_block'});
    event.remove({id:'farmersdelight:shepherds_pie_block'});
    event.remove({id:'farmersdelight:rice_roll_medley_block'});
    event.remove({id:'candlelight:dough'});
    event.remove({output:'create:dough',mod:'create_central_kitchen'});
    event.remove({id:'create:crafting/appliances/dough'});
    event.remove({id:'delightful:cutting/green_tea_leaves_using_deployer'});
    event.remove({id:'delightful:cutting/green_tea_leaves'});
    event.remove({id:'createfood:minecraft/crafting/shredded_potato_from_crafting'});
    event.remove({id:'createfood:minecraft/crafting/shredded_carrot_from_crafting'});
    event.remove({id:'createfood:minecraft/crafting/shredded_beetroot_from_crafting'});
    event.remove({id:'createfood:minecraft/crafting/shredded_chicken_from_crafting'});
    event.remove({id:'createfood:minecraft/crafting/sugar_dough_from_wheat_crafting'});
    event.remove({id:'farmersdelight:sequenced_assembly/stuffed_pumpkin'});
    event.remove({id:'createfood:farmersdelight/cooking/gelatin_from_cooking'});
    event.remove({id:'meadow:can'});    
    event.remove({id:'createfood:create/compacting/sugar_cane_fluid_from_compacting'});
    event.remove({output:'croptopia:flour'});
    event.remove({input:'croptopia:flour'});
    // BY MOD
    event.remove({mod:'create_cheese'});
    event.remove({mod:'corn_delight'});
    event.remove({mod:'pamhc2foodcore'});
    event.remove({mod:'pamhc2foodextended'});
    // BELOW RECIPES NEED ALTERNATIVE 
    //removing all of Pam's recipes
    event.remove({id:'aquaculturedelight:crispy_nori_kelp'});
    event.remove({id:'nethersdelight:warped_moldy_meat'});
    event.remove({id:'nethersdelight:nether_skewer'});
    event.remove({id:'aquaculturedelight:turtule_meat_dish'});
    event.remove({id:'aquaculturedelight:fish_and_chips'});
    event.remove({id:'aquaculturedelight:large_fish_with_vegetables'});
    event.remove({id:'aquaculturedelight:fish_roll_medley'});
    event.remove({id:'aquaculturedelight:catfish_barbecue_stick'});
    event.remove({id:'aquaculturedelight:fried_perch_roll'});
    event.remove({id:'aquaculturedelight:raw_fish_fillet_roll'});
    event.remove({id:'oceansdelight:elder_guardian_roll'});
    event.remove({id:'oceansdelight:cabbage_wrapped_elder_guardian'});
    event.remove({id:'oceansdelight:fugu_roll'});
    event.remove({id:'oceansdelight:stuffed_cod'});    
})