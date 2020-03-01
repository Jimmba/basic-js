module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members.filter(el=> typeof (el) === "string").map(el=>el.trim().substr(0,1).toUpperCase()).sort().join("") : false;
};