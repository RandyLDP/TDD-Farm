const priceForPlant =1;


const getCostsForCrop = price =>{
    let totalCost = price.numCrops * priceForPlant
    console.log('total price for crop:', totalCost);
    return totalCost;
};

const getRevenueForCrop = (rev, crop) => {
    let revenue = rev.salePrice * crop.numCrops;
    console.log('revenue for crop: ', revenue)
    return revenue;
};

const getProfitForCrop = () => { 
  let profit = salePrice * numCrops - priceForPlant;
  console.log('we have a profit of: ' + profit);
  return profit;
};

const getTotalProfit = () => {
  let totalProfit = salePrice * numCrops
};





  module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    
}