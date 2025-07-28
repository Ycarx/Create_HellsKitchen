// ServerEvents.recipes(event => {
//     let orphanList = []
//     const excludedMods = [
//         'chipped',
//         'ftb_ph',
//         'minecraft',
//         'createcasing',
//         'vintage'
//     ]
//     const exclusionRegex = new RegExp(`^(?!${excludedMods.map(id => `${id}:`).join('|')}).*$`);

//     Ingredient.of(exclusionRegex).getItemIds().forEach(stack => {
//       if(event.countRecipes({ or: [{ output: stack }, { input: stack }] }) == 0 && Item.of(stack).isEdible()) orphanList.push(stack)
//     })
// orphanList.sort()
// JsonIO.write('kubejs/server_scripts/src/orphanlist.json', { list: orphanList })
// console.log(`KubeJS: Vérification des items orphelins terminée. ${orphanList.length} items sans recette trouvés.`);

// })