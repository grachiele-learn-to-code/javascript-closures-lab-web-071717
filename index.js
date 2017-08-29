const app = "I don't do much."

function bumpCounter() {
  let counter = 0

  function addBump() {
    return counter += 1
  }

  function getBumps() {
    return counter
  }
  return {getBumps, addBump}
}

function createAnimal(animalType) {
  return function (deadlyDevice) {
    return {animalType, deadlyDevice}
  };
}

var sharkCreator = createAnimal("Shark")

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

var sharkWithFrickinCannon = sharkCreator("Cannon")


// Create a function, createAnimal(), that takes one parameter, animalType.
// Create an inner function in this createAnimal() function that also has
// one parameter, deadlyDevice. This function then returns an object that forms
// our diabolical creation. This object has two properties, animalType and
// deadly Device that are the given arguments to both functions.
// An example of the output: { animalType: 'Monkey', deadlyDevice: 'Lightsaber' }
// Create a shark creator function by calling createAnimal() with the 'Shark'
// string. This should be assigned to a variable called sharkCreator.
// Add a variable called sharkWithFrickinLaserbeam that is a combination of a
// 'Shark' and 'Laserbeam'.
// Add a variable called sharkWithFrickinCannon that is a combination of a
// 'Shark' and 'Cannon'.
