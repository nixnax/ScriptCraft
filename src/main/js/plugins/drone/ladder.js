'use strict';
var Drone = require('./drone').Drone;
/************************************************************************
### Drone.ladder() method

Creates a ladder extending skyward.

#### Parameters

 * height (optional - default 1) 

#### Example

To create a ladder extending 10 blocks high:

    var drone = new Drone(self);
    drone.ladder(10)

At the in-game prompt, look at a block and then type:    

    /js ladder(10)

A ladder 10 blocks high will be created at the point you were looking at.

#### Since 
##### 3.0.3
***/
var blocks = require('blocks');
function ladder( height ){
  var block = this.getBlock();
  if (block.typeId == blocks.air || block.typeId == blocks.ladder){
    this.box(blocks.ladder, 1, height, 1);
  } else {
    this
      .back()
      .box(blocks.ladder, 1, height, 1)
      .fwd();
  }
}
Drone.extend( ladder );
