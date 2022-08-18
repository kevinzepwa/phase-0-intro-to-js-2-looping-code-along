// // Code your solutions in this file
function writeCards(friends, event) {
  let arrayNames = [] 
  for (let i = 0; i < friends.length; i++) {
    arrayNames.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
  }
  return arrayNames
}

function countDown(positiveInteger) { 
    while (positiveInteger > -1) {
      console.log(positiveInteger--);
    }
}

writeCards(["friends", "good"], "event")