module.exports = function repeater(str, options) {
   let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
   let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : "";
   let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
   let addition = options.addition !== undefined ? new Array(additionRepeatTimes).fill(options.addition === null ? "null" : options.addition).join(additionSeparator) : "";
   let separator = options.separator !== undefined ? options.separator : "+"; 

   let ar = new Array(repeatTimes).fill(str + addition).join(separator);

   return ar === "" ? " " : ar;
};

//console.log(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }));