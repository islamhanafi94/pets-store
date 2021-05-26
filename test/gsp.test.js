const GeneralizedSecondPriceAuctionCalculator = require("../app/scripts/generalizedSecondPriceAuctionCalculator");
const { expect } = require("chai");

describe("Test Function to calculate Generalized second-price auction winners", () => {
  const items = 3;
  const input = [
    { name: "John Smith", amount: 500 },
    { name: "John Doe", amount: 100 },
    { name: "Sara Conor", amount: 280 },
    { name: "Martin Fowler", amount: 320 },
  ];

  it("should  return No winners When No bidders", () => {
    const input = [];
    const result = GeneralizedSecondPriceAuctionCalculator(items, input);
    expect(result).to.equal("No Winners");
  });

  it("should  return No winners When items is 0", () => {
    const items = 0;
    const result = GeneralizedSecondPriceAuctionCalculator(items, input);
    expect(result).to.equal("No Winners");
  });

  it("should  return No winners When bidders is less than items count", () => {
    const items = 0;
    const result = GeneralizedSecondPriceAuctionCalculator(items, input);
    expect(result).to.equal("No Winners");
  });

  it("should  return John Smith With amount of 320 USD", () => {
    const result = GeneralizedSecondPriceAuctionCalculator(items, input);
    expect(result[0].name).to.equal("John Smith");
    expect(result[0].amountToPay).to.equal(320);
  });

  it("should  return John Doe as a loser", () => {
    const result = GeneralizedSecondPriceAuctionCalculator(items, input);
    expect(result[result.length - 1].name).to.equal("John Doe");
    expect(result[result.length - 1].amountToPay).to.equal("Lost the auction");
  });
});
