const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  if (typeof(sampleActivity) !== "string") {
    return false;
  } else {
    if ((Number)(parseFloat(sampleActivity)).toString() === "NaN") {
      return false;
    } else {
      if ((Number)(sampleActivity) <= 0) {
        return false;
      } else {
        result =  Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / (0.693/HALF_LIFE_PERIOD));
      }
    }
  }
  
  return result > 0 ? result : false;
}