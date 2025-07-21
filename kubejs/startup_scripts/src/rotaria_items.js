// StartupEvents.registry("item", (event) => {
//   let item = (name) => {
//     let id = name.toLowerCase().replace(/ /g, "_");
//     event.create(id).texture(`kubejs:item/${id}`).displayName(name);
//   };
//   item("Bland Clockworks Hot Burger");
//   item("Clockworks hot burger");
//   item("Cogwheel Patty");
//   item("Bread Bun");
//   item("Andesite Bun");
//   item("Tea Paste");
//   item("Washed Tea Paste");
//   item("Dried Tea Paste");
//   item("Matcha Powder");
//   item("Netherite Chip Cookie");
//   item("Netherite Chip");
//   item("Engineers Happy Meal");
//   item("Spicy Lemonade Bottle");
//   item("Matcha Cola");
//   event.create('magic_matcha_cola').texture('kubejs:item/matcha_cola').displayName('Magic Matcha Cola').glow(true);
// });

// StartupEvents.registry("fluid", (event) => {
//     event.create('mayo')
//     .displayName('Mayo')
//     .stillTexture('kubejs:block/mayo_still')
//     .flowingTexture('kubejs:block/mayo_flow')
//     .bucketColor(0xFFEDBA);

//     event.create('redstone_mayo')
//     .displayName('Redstone Mayo')
//     .stillTexture('kubejs:block/redstone_mayo_still')
//     .flowingTexture('kubejs:block/redstone_mayo_flow')
//     .bucketColor(0xF2705E);

//     event.create('spicy_lemonade')
//     .displayName('Spicy Lemonade')
//     .stillTexture('kubejs:block/spicy_lemonade_still')
//     .flowingTexture('kubejs:block/spicy_lemonade_flow')
//     .bucketColor(0xEDA758);

// });