const priceForPlant =1;


const getCostsForCrop = (input) => {    
  const totalCosts = input.numCrops * priceForPlant;
  console.log("total price for a crop: ", totalCosts);
  return totalCosts;
};

const getTotalCosts = (input) => {
  const costsPerCrop = input.map((crop) => getCostsForCrop(crop));
  const totalCosts = costsPerCrop.reduce((acc, cur) => acc + cur);
  return totalCosts;
};

const getRevenueForCrop = (input, factor) => {
  const revenueForOnePlant = input.crop.salePrice * getYieldForPlant(input.crop, factor);
  const revenueForCrop = revenueForOnePlant * input.numCrops;
  console.log("Revenue for a crop: ", revenueForCrop);
  return revenueForCrop;
};

const getProfitForCrop = (input, factor) => {
  const profitForCrop = getRevenueForCrop(input, factor) - getCostsForCrop(input);
  console.log("Profit of a crop: ", profitForCrop);
  return parseFloat(profitForCrop.toFixed(2));    
};

const getTotalProfit = (input, factor) => {
  const profitPerCrop = input.map((crop) => getProfitForCrop(crop, factor));
  console.log("Profit of a crop: ", profitPerCrop);
  const totalProfit = profitPerCrop.reduce((acc, cur) => acc + cur);
  console.log("Total profit of a crop: ", totalProfit);
  return parseFloat(totalProfit.toFixed(2));
};

const getYieldForPlant = (input, factor) => {
  if (!factor) {
      return input.yield;
  };   
  let sun;
  let wind;
  
  if (!input.factors.sun) {
      sun = 1;
  } else {
      switch(factor.sun) {
          case "low":
              sun = (100 + input.factors.sun.low)/100;
              break;
          case "medium":
              sun = (100 + input.factors.sun.medium)/100;
              break;
          case "high":
              sun = (100 + input.factors.sun.high)/100;
              break;  
          default:
              sun = 1;          
      };
  };    
  if (!input.factors.wind) {
      wind = 1;
  } else {
      switch(factor.wind) {
          case "low":
              wind = (100 + input.factors.wind.low)/100;
              break;
          case "medium":
              wind = (100 + input.factors.wind.medium)/100;
              break;
          case "high":
              wind = (100 + input.factors.wind.high)/100;
              break;  
          default:
              wind = 1;          
    };};    
  console.log("sun, wind: ", sun, wind);
  const yieldPerPlant = input.yield * sun * wind;
  console.log("yield for plant: ", yieldPerPlant);
  return parseFloat(yieldPerPlant.toFixed(2));
}; 


const getYieldForCrop = (input, factor) => {
  const yieldPerPlant = getYieldForPlant(input.crop, factor);
  const yieldPerCrop = yieldPerPlant * input.numCrops;
  return parseFloat(yieldPerCrop.toFixed(2));
};


const getTotalYield = (input, factor) => {     
  const yieldPerCrop = input.crops.map((crop) => getYieldForCrop(crop, factor));
  const totalYield = yieldPerCrop.reduce((acc, cur) => acc + cur);
  return parseFloat(totalYield.toFixed(2));  
};

module.exports = {
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
};