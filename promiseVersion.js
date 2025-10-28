const mowYard = new Promise((resolve, reject) => {
  setTimeout((name) => {
    resolve(`${name} mowed the yard.`);
  }, 2000);
});


const weedEat = new Promise((resolve, reject) => {
  setTimeout((name) => {
    if (Math.random() <= 0.8) {
      resolve(`${name} finished using the weed eater.`);
    } else {
      reject(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
});


const trimHedges = new Promise((resolve, reject) => {
  setTimeout((name) => {
    if (Math.random() <= 0.8) {
      resolve(`${name} finished trimming the hedges.`);
    } else {
      reject(`${name} fell asleep after weed eating the yard.`);
    }
  }, 1000);
});

const collectWood = new Promise((resolve, reject) => {
  setTimeout((name) => {
    if (Math.random() <= 0.7) {
      resolve(`${name} finished collecting wood.`);
    } else {
      reject(`${name} fell asleep after trimming the hedges.`);
    }
  }, 2500);
});

const waterGarden = new Promise((resolve, reject) => {
  setTimeout((name) => {
    if (Math.random() <= 0.6) {
      resolve(`${name} finished watering the garden.`);
    } else {
      reject(`${name} fell asleep after collecting wood.`);
    }
  }, 500);
});

function doSummerChores(name) {
  if (typeof name != "string") {
    console.log("Entry must be a string.");
  } else {
    mowYard
      .then((value) => {
        console.log(value);
        return weedEat;
      })
      .then((value) => {
        console.log(value);
        return trimHedges;
      })
      .then((value) => {
        console.log(value);
        return collectWood;
      })
      .then((value) => {
        console.log(value);
        return waterGarden;
      })
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

doSummerChores("Bill");
