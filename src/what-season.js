module.exports = function getSeason(date) {
  if (date === null) return('Unable to determine the time of year!');
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (date instanceof Date){
    try {
      date.getTime();
    } catch {
      throw new Error();
    }
    return seasons[Math.floor((date.getMonth() + 1) / 3 ) % 4];
  }  else {
    if (date !== undefined) throw new Error();
    return 'Unable to determine the time of year!';
}
};