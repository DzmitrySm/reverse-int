module.exports = function reverse (n) {
  let modulN = Math.abs(n)
  let newType = modulN.toString();
  let i = newType.length - 1;
  let result = '' ;
  while (i >= 0) {
      result = result + newType[i] ;
      i = i - 1;
  }
  

return Math.floor(result);
}

