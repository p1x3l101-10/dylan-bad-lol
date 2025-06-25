ServerEvents.recipes(event => {
 event.shaped(
    Item.of('hexcasting:charged_amethyst', 5), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'mysticalagriculture:amethyst_essence',
      B: 'minecraft:amethyst_shard',
    }
  );
  event.shaped(
    Item.of('hexcasting:amethyst_dust', 40), 
    [
      'AAA'
    ],
    {
      A: 'mysticalagriculture:amethyst_essence'
    }
  );
})
