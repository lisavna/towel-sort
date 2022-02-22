module.exports = function towelSort (matrix = []) {
  let result = [];
  for (let i = 0; i < matrix.length; i++){
    result.push(...(i % 2 === 0)?matrix[i]:matrix[i].reverse());
  }
  return result;
}
