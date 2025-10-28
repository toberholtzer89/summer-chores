function mowYard(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} mowed the yard.`);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.88) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.82) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.75) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.72) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  if (typeof name != "string") {
    console.log("Entry must be a string.");
  } else {
    mowYard(name).then(value => {console.log(value); return weedEat(name)})
             .then(value => {console.log(value); return trimHedges(name)})
             .then(value => {console.log(value); return collectWood(name)})
             .then(value => {console.log(value); return waterGarden(name)})
             .then(value => {console.log(value)})
             .then(() => console.log(`${name} has finished all the chores!`))
             .catch(error => console.log(error));
  }
}

doSummerChores("Bill");
