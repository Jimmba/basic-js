module.exports = class DepthCalculator {
    calculate(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                this.counter += 1;
                this.max = this.counter > this.max ? this.counter : this.max;
                this.calculate (arr[i]);
            }
        }
        this.counter -= 1;
    }

    calculateDepth(arr) {
        this.max = 1;
        this.counter = 1;
        this.calculate(arr);
        return this.max;
    }
};