module.exports = function countCats(matrix) {
  let count = 0;
    for (let i = 0; i < matrix.length; i += 1) {
      count += matrix[i].filter(el => el === "^^").length;
    }
  return count;
};
