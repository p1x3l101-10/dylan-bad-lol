ServerEvents.recipes(event => {
  event.shaped(
    Item.of('iceandfire:lightning_dragon_blood', 8), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:glass_bottle',
      B: 'iceandfire:lightning_dragon_heart'  
    }
  );
  event.shaped(
    Item.of('iceandfire:fire_dragon_blood', 8), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:glass_bottle',
      B: 'iceandfire:fire_dragon_heart'  
    }
  );
  event.shaped(
    Item.of('iceandfire:ice_dragon_blood', 8), 
    [
      'AAA',
      'ABA', 
      'AAA'
    ],
    {
      A: 'minecraft:glass_bottle',
      B: 'iceandfire:ice_dragon_heart'  
    }
  );
})