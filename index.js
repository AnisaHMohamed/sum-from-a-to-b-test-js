
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return toN;
  }

    return (fromN+ sum(fromN + 1,toN))
}
console.log(sum(0, 5))
module.exports = sum;





