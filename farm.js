const priceForPlant =1;


const getCostsForCrop = price =>{
    let totalCost = price.numCrops * priceForPlant
    console.log('total price for crop:', totalCost);
    return totalCost;
}






  module.exports = {
    getCostsForCrop,
    
}