ServerEvents.recipes(event => {
 event.shaped(
    Item.of('minecraft:seeds', 1), 
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
