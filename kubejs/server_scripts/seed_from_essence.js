ServerEvents.recipes(event => {
 event.shaped(
    Item.of('minecraft:wheat_seeds', 16), 
    [
      'A A',
      'AAA', 
      'AAA'
    ],
    {
      A: 'mysticalagriculture:nature_essence',
    }
  );
})
