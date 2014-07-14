var launcher = require('./driver.js');
//park always resets to a starting position all the way left and all the way down.
//allows for more accurate repeated fires.
launcher.park(function(){
    launcher.right(3000, function(){
        launcher.up(500, function(){
            launcher.fire();
        });
    })
});