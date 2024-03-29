function mineralMining(mineral, miningPower, duration, cost) {
  let timetoget = 0;
  let totalincome = 0;
  let pricemarket = 0

  switch (mineral) {
    case 'gold':
      timetoget = 30;
      pricemarket = 1;
      break;
    case 'silver':
      timetoget = 20;
      pricemarket = 0.6;
      break;
    case 'coper':
      timetoget = 5;
      pricemarket = 0.3;
      break;
    case 'uranium':
      timetoget = 75;
      pricemarket = 3;
      break;
    case 'platinum':
      timetoget = 15;
      pricemarket = 2;
      break;
    case 'titanium':
      timetoget = 55;
      pricemarket = 1.5;
      break;
    default:
      return 'Invalid mineral name';
  }
  const miningResult = (duration / timetoget) * miningPower;

  totalincome = miningResult * pricemarket;

  if (cost > totalincome) {
    return "Mineral mining at a loss "+(totalincome-cost);
  }
  else if(cost<totalincome){
    return "Mineral mining profit "+(totalincome-cost);
  }
  else{
    return "Invalid mineral name"
  }
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss -11.666666666666666

module.exports = mineralMining;