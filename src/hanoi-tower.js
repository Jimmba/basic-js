module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn = Math.pow(2, disksNumber) - 1;
    let turnSpeedPerHour = turnsSpeed / 3600;
    return {
        turns: turn,
        seconds: turn / turnSpeedPerHour
    }
}