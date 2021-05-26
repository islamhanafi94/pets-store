function GeneralizedSecondPriceAuctionCalculator(items = 0, input = []) {
  if (input.length === 0 || input.length <= items || items <= 0) {
    return 'No Winners';
  }

  // sort input data
  const sorted = input.sort((firstBid, secondBid) => {
    const amountDifferance = secondBid.amount - firstBid.amount;
    if (amountDifferance === 0) {
      return firstBid.name.localeCompare(secondBid.name);
    }
    return amountDifferance;
  });

  const result = sorted.map((bid, index, array) => {
    if (index === array.length - 1 || items <= index) {
      return { name: bid.name, amountToPay: 'Lost the auction' };
    }

    return { name: bid.name, amountToPay: array[index + 1].amount };
  });

  return result;
}

module.exports = GeneralizedSecondPriceAuctionCalculator;
