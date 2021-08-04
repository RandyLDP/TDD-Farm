const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,} = require("./farm.js");


// We gonna test de cost for crop
describe ("getCostsForCrop", () => {
    const crops = {
     numCrops: 30}
    
    test("Get costs for crop", () => {
        expect(getCostsForCrop(crops)).toBe(30);
    });
});
describe("getRevenueForCrop", () => {
    const crops = {
        name: "corn",
        numCrops: 30,
        salePrice: 2,
    }

    test("Get revenue for crop", () => {
        expect(getRevenueForCrop(corn)).toBe(60);
    });
});

describe("getProfitForCrop", () => {
    const crops = {
         name: "pumpkin",
         numCrops: 30,
         salePrice: 2,
    }

    test("Get profit for crop", () => {
        expect(getProfitForCrop(pumpkin)).toBe(60);
    });
});

describe("Get total profit", () => {
    const crops = 
            {crop: "corn", 
            numCrops: 15,
            salePrice: 3,
        }
    test("get total profit ", () => {
        expect(getTotalProfit(crops)).toBe(45);
    });});

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});




// plants/crops

const pumpkin = {
    name: 'pumpkin',
    yield: 20,
    salePrice: 3, 
    factors: {
    sun: {
        low: -20,
        medium: 0,
        high: 50,
    },
    wind:{
        low: 30,
        medium: 0,
        high: -30,
    },},
};
    const corn = {
        name: "corn",
        yield: 30,
        salePrice: 2,
        factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },};
  
  const environmentFactors = {
    sun: "low",
    }