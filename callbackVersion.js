function mowYard(name, callback) {
    setTimeout(() => {console.log(`${name} mowed the yard.`);
    callback();
    }, 2000);
}

function weedEat(name, callback) {
    if (Math.random() <= .8) {
        setTimeout(() => {console.log(`${name} finished using the weed eater.`);
        callback();
        }, 1500);
        
    } else {
        console.log(`${name} fell asleep after mowing the yard.`);
    }
}

function trimHedges(name, callback) {
    if (Math.random() <= .8) {
        setTimeout(() => {console.log(`${name} finished trimming the hedges.`);
        callback();
        }, 1000);
        
    } else {
        console.log(`${name} fell asleep after weed eating the yard.`);
    }
}

function collectWood(name, callback) {
    if (Math.random() <= .7) {
        setTimeout(() => {console.log(`${name} finished collecting wood.`);
        callback();
        }, 2500);
        
    } else {
        console.log(`${name} fell asleep after trimming the hedges.`);
    }
}

function waterGarden(name, callback) {
    if (Math.random() <= .6) {
        setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback();
        }, 500);
        
    } else {
        console.log(`${name} fell asleep after collecting wood.`);
    }
}

function doSummerChores(name) {
    if (typeof name != 'string') {
        console.log("Entry must be a string.");
    } else {
        mowYard(name, () => {
            weedEat(name, () => {
                trimHedges(name, () => {
                    collectWood(name, () => {
                        waterGarden(name, () => {
                            console.log(`${name} finished all their chores!`);
                        })
                    })
                })
            })
         })
        }
    }

doSummerChores("Bill");