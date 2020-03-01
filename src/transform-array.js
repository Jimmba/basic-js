module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    let array = [];
    for (let i = 0; i < arr.length; i += 1) {
        switch (arr[i]) {
            case "--double-next":
                if (i !== arr.length - 1) array.push(arr[i + 1]);
                break;
            case "--double-prev":
                if (i !== 0) array.push(arr[i - 1]);
                break;
            case "--discard-prev":
                if (i !== 0) array.pop();
                break;
            case "--discard-next":
                if (i !== arr.length - 1) i += 1;
                break;
            default:
                array.push(arr[i]);
        }
    }
    return array;
};


// let arr = [ '--double-prev', Infinity, '--double-next', 3.14, '--double-next', 'ABC', 333, true, '--discard-prev' ]  ;
// console.log(transform(arr));
